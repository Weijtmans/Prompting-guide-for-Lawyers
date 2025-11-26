"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { periodicNoiseGLSL } from "./shaders/utils";

// Configuration (previously from leva controls)
const CONFIG = {
  speed: 1.0,
  noiseScale: 0.6,
  noiseIntensity: 0.52,
  timeScale: 1,
  focus: 3.8,
  aperture: 1.79,
  pointSize: 10.0,
  opacity: 0.8,
  planeScale: 10.0,
  size: 512,
  vignetteDarkness: 1.5,
  vignetteOffset: 0.4,
  revealDuration: 3.5,
};

// Vignette shader
const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    darkness: { value: CONFIG.vignetteDarkness },
    offset: { value: CONFIG.vignetteOffset },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float darkness;
    uniform float offset;
    varying vec2 vUv;
    
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - 0.5) * 2.0;
      float dist = dot(uv, uv);
      float vignette = 1.0 - smoothstep(offset, offset + darkness, dist);
      gl_FragColor = vec4(texel.rgb * vignette, texel.a);
    }
  `,
};

// Generate plane positions for simulation
function getPlaneData(count: number, size: number, scale: number): Float32Array {
  const data = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    const i4 = i * 4;
    const x = (i % size) / (size - 1);
    const z = Math.floor(i / size) / (size - 1);
    data[i4 + 0] = (x - 0.5) * 2 * scale;
    data[i4 + 1] = 0;
    data[i4 + 2] = (z - 0.5) * 2 * scale;
    data[i4 + 3] = 1.0;
  }
  return data;
}

// Simulation material for GPGPU
function createSimulationMaterial(positionsTexture: THREE.DataTexture) {
  return new THREE.ShaderMaterial({
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D positions;
      uniform float uTime;
      uniform float uNoiseScale;
      uniform float uNoiseIntensity;
      uniform float uTimeScale;
      uniform float uLoopPeriod;
      varying vec2 vUv;

      ${periodicNoiseGLSL}

      void main() {
        vec3 originalPos = texture2D(positions, vUv).rgb;
        float continuousTime = uTime * uTimeScale * (6.28318530718 / uLoopPeriod);
        vec3 noiseInput = originalPos * uNoiseScale;
        
        float displacementX = periodicNoise(noiseInput + vec3(0.0, 0.0, 0.0), continuousTime);
        float displacementY = periodicNoise(noiseInput + vec3(50.0, 0.0, 0.0), continuousTime + 2.094);
        float displacementZ = periodicNoise(noiseInput + vec3(0.0, 50.0, 0.0), continuousTime + 4.188);
        
        vec3 distortion = vec3(displacementX, displacementY, displacementZ) * uNoiseIntensity;
        vec3 finalPos = originalPos + distortion;
        
        gl_FragColor = vec4(finalPos, 1.0);
      }
    `,
    uniforms: {
      positions: { value: positionsTexture },
      uTime: { value: 0 },
      uNoiseScale: { value: CONFIG.noiseScale },
      uNoiseIntensity: { value: CONFIG.noiseIntensity },
      uTimeScale: { value: CONFIG.timeScale * CONFIG.speed },
      uLoopPeriod: { value: 24.0 },
    },
  });
}

// Points material with DOF effect
function createPointsMaterial(positionsTexture: THREE.DataTexture) {
  return new THREE.ShaderMaterial({
    vertexShader: /* glsl */ `
      uniform sampler2D positions;
      uniform sampler2D initialPositions;
      uniform float uTime;
      uniform float uFocus;
      uniform float uBlur;
      uniform float uPointSize;
      varying float vDistance;
      varying float vPosY;
      varying vec3 vWorldPosition;
      varying vec3 vInitialPosition;
      
      void main() { 
        vec3 pos = texture2D(positions, position.xy).xyz;
        vec3 initialPos = texture2D(initialPositions, position.xy).xyz;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        vDistance = abs(uFocus - -mvPosition.z);
        vPosY = pos.y;
        vWorldPosition = pos;
        vInitialPosition = initialPos;
        gl_PointSize = max(vDistance * uBlur * uPointSize, 3.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      uniform float uRevealFactor;
      uniform float uRevealProgress;
      uniform float uTime;
      uniform float uTransition;
      varying float vDistance;
      varying float vPosY;
      varying vec3 vWorldPosition;
      varying vec3 vInitialPosition;

      ${periodicNoiseGLSL}

      float sparkleNoise(vec3 seed, float time) {
        float hash = sin(seed.x * 127.1 + seed.y * 311.7 + seed.z * 74.7) * 43758.5453;
        hash = fract(hash);
        float slowTime = time * 1.0;
        float sparkle = 0.0;
        sparkle += sin(slowTime + hash * 6.28318) * 0.5;
        sparkle += sin(slowTime * 1.7 + hash * 12.56636) * 0.3;
        sparkle += sin(slowTime * 0.8 + hash * 18.84954) * 0.2;
        
        float hash2 = sin(seed.x * 113.5 + seed.y * 271.9 + seed.z * 97.3) * 37849.3241;
        hash2 = fract(hash2);
        float sparkleMask = sin(hash2 * 6.28318) * 0.7;
        sparkleMask += sin(hash2 * 12.56636) * 0.3;
        
        if (sparkleMask < 0.3) {
          sparkle *= 0.05;
        }
        
        float normalizedSparkle = (sparkle + 1.0) * 0.5;
        float smoothCurve = pow(normalizedSparkle, 4.0);
        float blendFactor = normalizedSparkle * normalizedSparkle;
        float finalBrightness = mix(normalizedSparkle, smoothCurve, blendFactor);
        
        return 0.7 + finalBrightness * 1.3;
      }

      float sdCircle(vec2 p, float r) {
        return length(p) - r;
      }

      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        float sdf = sdCircle(cxy, 0.5);
        if (sdf > 0.0) discard;

        float distanceFromCenter = length(vWorldPosition.xz);
        float noiseValue = periodicNoise(vInitialPosition * 4.0, 0.0);
        float revealThreshold = uRevealFactor + noiseValue * 0.3;
        float revealMask = 1.0 - smoothstep(revealThreshold - 0.2, revealThreshold + 0.1, distanceFromCenter);
        float sparkleBrightness = sparkleNoise(vInitialPosition, uTime);
        float alpha = (1.04 - clamp(vDistance, 0.0, 1.0)) * clamp(smoothstep(-0.5, 0.25, vPosY), 0.0, 1.0) * uOpacity * revealMask * uRevealProgress * sparkleBrightness;

        gl_FragColor = vec4(vec3(1.0), mix(alpha, sparkleBrightness - 1.1, uTransition));
      }
    `,
    uniforms: {
      positions: { value: null },
      initialPositions: { value: positionsTexture },
      uTime: { value: 0 },
      uFocus: { value: CONFIG.focus },
      uBlur: { value: CONFIG.aperture },
      uTransition: { value: 0.0 },
      uPointSize: { value: CONFIG.pointSize },
      uOpacity: { value: CONFIG.opacity },
      uRevealFactor: { value: 0.0 },
      uRevealProgress: { value: 0.0 },
    },
    transparent: true,
    depthWrite: false,
  });
}

export const GL = ({ hovering }: { hovering: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const pointsMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const simMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const clockRef = useRef(new THREE.Clock());
  const revealStartTimeRef = useRef<number | null>(null);
  const transitionRef = useRef(0);
  const animationIdRef = useRef<number>(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    const container = containerRef.current;
    const { size, planeScale } = CONFIG;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Setup main scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.01,
      300
    );
    camera.position.set(1.263, 2.665, -1.818);
    camera.lookAt(0, 0, 0);

    // Setup simulation scene for GPGPU
    const simScene = new THREE.Scene();
    const simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Create initial positions texture
    const particleCount = size * size;
    const positionsData = getPlaneData(particleCount, size, planeScale);
    const positionsTexture = new THREE.DataTexture(
      positionsData,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    positionsTexture.needsUpdate = true;

    // Create render target for simulation
    const renderTarget = new THREE.WebGLRenderTarget(size, size, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    });

    // Setup simulation quad
    const simMaterial = createSimulationMaterial(positionsTexture);
    simMaterialRef.current = simMaterial;
    const simGeometry = new THREE.PlaneGeometry(2, 2);
    const simQuad = new THREE.Mesh(simGeometry, simMaterial);
    simScene.add(simQuad);

    // Setup particle system
    const pointsMaterial = createPointsMaterial(positionsTexture);
    pointsMaterial.uniforms.positions.value = renderTarget.texture;
    pointsMaterialRef.current = pointsMaterial;

    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3 + 0] = (i % size) / size;
      particlePositions[i3 + 1] = Math.floor(i / size) / size;
      particlePositions[i3 + 2] = 0;
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Setup post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new ShaderPass(VignetteShader));
    composerRef.current = composer;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clockRef.current.getElapsedTime();

      // Initialize reveal start time
      if (revealStartTimeRef.current === null) {
        revealStartTimeRef.current = elapsedTime;
      }

      // Calculate reveal progress
      const revealElapsed = elapsedTime - revealStartTimeRef.current;
      const revealProgress = Math.min(revealElapsed / CONFIG.revealDuration, 1.0);
      const easedProgress = 1 - Math.pow(1 - revealProgress, 3);
      const revealFactor = easedProgress * 4.0;

      // Update simulation material
      simMaterial.uniforms.uTime.value = elapsedTime;

      // Update points material
      pointsMaterial.uniforms.uTime.value = elapsedTime;
      pointsMaterial.uniforms.uRevealFactor.value = revealFactor;
      pointsMaterial.uniforms.uRevealProgress.value = easedProgress;

      // Render simulation to texture
      renderer.setRenderTarget(renderTarget);
      renderer.clear();
      renderer.render(simScene, simCamera);
      renderer.setRenderTarget(null);

      // Render main scene with post-processing
      composer.render();
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationIdRef.current);
      renderer.dispose();
      renderTarget.dispose();
      positionsTexture.dispose();
      simGeometry.dispose();
      simMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [isClient]);

  // Handle hover transition
  useEffect(() => {
    if (!pointsMaterialRef.current) return;

    const targetTransition = hovering ? 1.0 : 0.0;
    const speed = hovering ? 0.35 : 0.2;

    let animationId: number;
    const animateTransition = () => {
      if (!pointsMaterialRef.current) return;

      const current = transitionRef.current;
      const diff = targetTransition - current;

      if (Math.abs(diff) > 0.001) {
        transitionRef.current += diff * (1 - Math.exp(-16.67 / (speed * 1000)));
        pointsMaterialRef.current.uniforms.uTransition.value = transitionRef.current;
        animationId = requestAnimationFrame(animateTransition);
      } else {
        transitionRef.current = targetTransition;
        pointsMaterialRef.current.uniforms.uTransition.value = targetTransition;
      }
    };

    animateTransition();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [hovering]);

  if (!isClient) {
    return <div id="webgl" className="absolute inset-0 -z-10" />;
  }

  return <div id="webgl" ref={containerRef} className="absolute inset-0 -z-10" />;
};
