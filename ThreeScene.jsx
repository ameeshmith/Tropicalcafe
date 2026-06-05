import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function FloatingParticles({ count = 30 }) {
  const pointsRef = useRef()

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      spd[i] = 0.005 + Math.random() * 0.01
    }
    return [pos, spd]
  }, [count])

  useFrame(() => {
    if (!pointsRef.current) return
    const geo = pointsRef.current.geometry
    const posArr = geo.attributes.position.array
    for (let i = 0; i < count; i++) {
      posArr[i * 3 + 1] += speeds[i]
      if (posArr[i * 3 + 1] > 4) {
        posArr[i * 3 + 1] = -4
      }
    }
    geo.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#D4A76A"
        size={0.06}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function TropicalLeaf({ scale = 1, color = "#2D6A4F", ...props }) {
  const leafRef = useRef()

  const leafGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.quadraticCurveTo(0.6, 0.4, 0.4, 1.2)
    shape.quadraticCurveTo(0.8, 1.5, 0.2, 2.2)
    shape.quadraticCurveTo(0.4, 2.8, 0.0, 3.5)
    shape.quadraticCurveTo(-0.4, 2.8, -0.2, 2.2)
    shape.quadraticCurveTo(-0.8, 1.5, -0.4, 1.2)
    shape.quadraticCurveTo(-0.6, 0.4, 0, 0)

    const extrudeSettings = {
      steps: 1,
      depth: 0.04,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 3,
    }
    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
  }, [])

  useFrame((state) => {
    if (!leafRef.current) return
    const t = state.clock.getElapsedTime()
    leafRef.current.rotation.z = Math.sin(t * 0.5) * 0.05
  })

  return (
    <mesh ref={leafRef} geometry={leafGeometry} scale={scale} {...props}>
      <meshPhysicalMaterial
        color={color}
        roughness={0.4}
        metalness={0.1}
        clearcoat={0.6}
        clearcoatRoughness={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function PremiumCup() {
  const cupGroup = useRef()

  useFrame((state) => {
    if (!cupGroup.current) return
    const t = state.clock.getElapsedTime()
    cupGroup.current.rotation.y = t * 0.15
  })

  return (
    <group ref={cupGroup}>
      {/* Saucer */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[1.6, 1.3, 0.08, 32]} />
        <meshPhysicalMaterial
          color="#0E1A14"
          roughness={0.2}
          metalness={0.8}
          clearcoat={1.0}
        />
      </mesh>
      
      {/* Rim */}
      <mesh position={[0, -0.85, 0]}>
        <torusGeometry args={[1.58, 0.02, 8, 32]} />
        <meshPhysicalMaterial
          color="#D4A76A"
          roughness={0.1}
          metalness={1.0}
        />
      </mesh>

      {/* Cup */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[1.0, 0.8, 1.1, 32]} />
        <meshPhysicalMaterial
          color="#1C2B23"
          roughness={0.1}
          metalness={0.6}
          clearcoat={1.0}
        />
      </mesh>

      {/* Handle */}
      <mesh position={[0.9, -0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.3, 0.07, 12, 32, Math.PI * 1.5]} />
        <meshPhysicalMaterial
          color="#D4A76A"
          roughness={0.15}
          metalness={1.0}
        />
      </mesh>

      {/* Coffee */}
      <mesh position={[0, 0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.96, 32]} />
        <meshStandardMaterial
          color="#422212"
          roughness={0.4}
        />
      </mesh>

      {/* Latte Art */}
      <mesh position={[0, 0.23, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.0, 0.4, 32]} />
        <meshStandardMaterial
          color="#EED9C4"
          roughness={0.5}
        />
      </mesh>
    </group>
  )
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas eventSource={typeof window !== 'undefined' ? window.document.getElementById('root') : undefined}>
        <PerspectiveCamera makeDefault position={[0, 1.5, 4.5]} fov={50} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 3]} intensity={1.5} castShadow />
        <pointLight position={[-5, 5, -2]} intensity={0.5} color="#D4A76A" />
        <spotLight position={[0, 8, 2]} angle={0.4} penumbra={1} intensity={1.2} color="#40916C" />

        <FloatingParticles count={40} />

        <group position={[0, 0.2, 0]}>
          <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.5}>
            <PremiumCup />
          </Float>

          <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
            <TropicalLeaf
              position={[-2.2, 0.6, -1]}
              rotation={[0.3, 0.5, -0.6]}
              scale={0.7}
              color="#2D6A4F"
            />
          </Float>

          <Float speed={2.0} rotationIntensity={0.6} floatIntensity={0.7}>
            <TropicalLeaf
              position={[2.0, -0.4, -0.5]}
              rotation={[0.2, -0.6, 0.8]}
              scale={0.8}
              color="#40916C"
            />
          </Float>

          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
            <TropicalLeaf
              position={[0.2, 1.8, -2]}
              rotation={[-0.4, 0.1, -1.2]}
              scale={1.1}
              color="#1B4332"
            />
          </Float>
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
