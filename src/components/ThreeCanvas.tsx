"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Mouse coordinates tracker
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Custom Shader Material for Luxury Mesh Gradient Background
    const backgroundGeometry = new THREE.PlaneGeometry(16, 10, 32, 32);
    
    const vertexShader = `
      varying vec2 vUv;
      varying float vElevation;
      uniform float uTime;
      uniform vec2 uMouse;

      void main() {
        vUv = uv;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        
        // Fluid waves
        float elevation = sin(modelPosition.x * 0.4 + uTime * 0.2) * 0.25;
        elevation += cos(modelPosition.y * 0.3 - uTime * 0.15) * 0.25;
        elevation += sin(modelPosition.x * 0.8 + modelPosition.y * 0.6 + uTime * 0.3) * 0.12;
        
        // Mouse interaction pull
        float dist = distance(modelPosition.xy, uMouse * vec2(4.0, 3.0));
        if (dist < 3.0) {
          elevation += (3.0 - dist) * 0.18 * sin(uTime * 1.5);
        }

        modelPosition.z += elevation;
        vElevation = elevation;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      varying float vElevation;
      uniform float uTime;

      void main() {
        // Shree's Apple x Dior x Vogue color palette
        vec3 colorPink = vec3(1.0, 0.867, 0.922);        // #FFDDEB
        vec3 colorDiorPink = vec3(1.0, 0.812, 0.878);    // #FFCFE0
        vec3 colorWhite = vec3(1.0, 0.976, 0.984);       // #FFF9FB
        vec3 colorLavender = vec3(0.949, 0.914, 1.0);    // #F2E9FF
        vec3 colorRoseGold = vec3(0.718, 0.431, 0.475);   // #B76E79 (darker accent for depth)

        // Wave mixing factors
        float mixX = sin(vUv.x * 2.0 + uTime * 0.1) * 0.5 + 0.5;
        float mixY = cos(vUv.y * 2.0 - uTime * 0.08) * 0.5 + 0.5;
        
        // Combine meshes
        vec3 color = mix(colorPink, colorWhite, mixX);
        color = mix(color, colorLavender, mixY);
        
        // Blend in Dior Pink based on elevation
        float elevationFactor = clamp((vElevation + 0.4) / 0.8, 0.0, 1.0);
        color = mix(color, colorDiorPink, elevationFactor);
        
        // Subtle Rose Gold shadows for depth
        color = mix(color, colorRoseGold, (1.0 - elevationFactor) * 0.12);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const backgroundMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      depthWrite: false,
    });

    const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
    backgroundMesh.position.z = -1; // Push to background
    scene.add(backgroundMesh);

    // Cherry Blossom Petals Setup
    const petalsCount = 35;
    const petalsGroup = new THREE.Group();
    scene.add(petalsGroup);

    // Petal geometry - custom diamond/oval look
    const petalGeometry = new THREE.PlaneGeometry(0.12, 0.16);
    // Add slight curve
    const pos = petalGeometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      pos.setZ(i, (0.08 - Math.abs(y)) * 0.2); // curve outwards
    }
    petalGeometry.computeVertexNormals();

    const petalMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#FFCFE0"),
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });

    const petalsData: Array<{
      mesh: THREE.Mesh;
      speedY: number;
      speedX: number;
      rotationSpeedX: number;
      rotationSpeedY: number;
      rotationSpeedZ: number;
      swayRange: number;
      swaySpeed: number;
      swayOffset: number;
      initialX: number;
    }> = [];

    for (let i = 0; i < petalsCount; i++) {
      const mesh = new THREE.Mesh(petalGeometry, petalMaterial);
      
      // Random coordinates distributed across the viewport
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 8;
      const z = Math.random() * 2; // closer or further from camera
      
      mesh.position.set(x, y, z);
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale for variety
      const scale = 0.5 + Math.random() * 0.7;
      mesh.scale.set(scale, scale, scale);

      petalsGroup.add(mesh);

      petalsData.push({
        mesh,
        speedY: 0.008 + Math.random() * 0.012,
        speedX: (Math.random() - 0.5) * 0.005,
        rotationSpeedX: Math.random() * 0.015,
        rotationSpeedY: Math.random() * 0.015,
        rotationSpeedZ: Math.random() * 0.01,
        swayRange: 0.1 + Math.random() * 0.25,
        swaySpeed: 0.5 + Math.random() * 1.5,
        swayOffset: Math.random() * Math.PI * 2,
        initialX: x,
      });
    }

    // Light Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(2, 2, 2);
    scene.add(directionalLight);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update background uniforms
      backgroundMaterial.uniforms.uTime.value = elapsedTime;
      
      // Interpolate mouse coordinates for fluid inertia (Apple feel)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      backgroundMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);

      // Move petals
      petalsData.forEach((petal) => {
        // Fall down
        petal.mesh.position.y -= petal.speedY;
        
        // Sway sideways (sine wave based on time)
        const sway = Math.sin(elapsedTime * petal.swaySpeed + petal.swayOffset) * petal.swayRange;
        petal.mesh.position.x = petal.initialX + sway + mouse.x * 0.15;
        
        // Slow rotation
        petal.mesh.rotation.x += petal.rotationSpeedX;
        petal.mesh.rotation.y += petal.rotationSpeedY;
        petal.mesh.rotation.z += petal.rotationSpeedZ;

        // Reset if off-screen (bottom of viewport is approx -4 units depending on aspect)
        if (petal.mesh.position.y < -4.5) {
          petal.mesh.position.y = 4.5;
          petal.mesh.position.x = (Math.random() - 0.5) * 10;
          petal.initialX = petal.mesh.position.x;
          petal.speedY = 0.008 + Math.random() * 0.012;
        }
      });

      // Render
      renderer.render(scene, camera);

      // Next frame
      frameId = requestAnimationFrame(tick);
    };

    let frameId = requestAnimationFrame(tick);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
      
      // Dispose resources
      backgroundGeometry.dispose();
      backgroundMaterial.dispose();
      petalGeometry.dispose();
      petalMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none select-none"
    />
  );
}
