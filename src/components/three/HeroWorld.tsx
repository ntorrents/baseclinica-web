"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

const BALL_R = 0.38;
const GAP = 0.018;
const SPACING = BALL_R * 2 + GAP;
const STRING_LEN = 1.55;
const COUNT = 5;

/** Emblema no médico: nodo de conexión (plataforma multi-clínica). */
function BrandMark() {
  return (
    <group position={[0, 0, BALL_R * 0.92]} scale={0.22}>
      <mesh>
        <circleGeometry args={[1, 48]} />
        <meshStandardMaterial color="#8c2f4a" roughness={0.35} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0.02]}>
        <ringGeometry args={[0.55, 0.78, 48]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, 0.03]}>
        <circleGeometry args={[0.28, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>
      {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((a, i) => (
        <mesh key={i} position={[Math.cos(a) * 0.42, Math.sin(a) * 0.42, 0.04]}>
          <circleGeometry args={[0.12, 24]} />
          <meshStandardMaterial color="#ffffff" roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function useStripeTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    const bands = 10;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = i % 2 === 0 ? "#1a1520" : "#f4f2f3";
      ctx.fillRect(0, (i / bands) * size, size, size / bands + 1);
    }
    const t = new THREE.CanvasTexture(canvas);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
}

function PorcelainBall() {
  return (
    <mesh castShadow>
      <sphereGeometry args={[BALL_R, 64, 64]} />
      <meshPhysicalMaterial
        color="#f7f5f6"
        roughness={0.12}
        metalness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.08}
      />
    </mesh>
  );
}

function Cradle({ reduceMotion }: { reduceMotion?: boolean }) {
  const phase = useRef(0);
  const left = useRef<THREE.Group>(null);
  const right = useRef<THREE.Group>(null);
  const leftStr = useRef<THREE.Mesh>(null);
  const rightStr = useRef<THREE.Mesh>(null);
  const stripeMap = useStripeTexture();

  const xLeft = (0 - (COUNT - 1) / 2) * SPACING;
  const xRight = ((COUNT - 1) - (COUNT - 1) / 2) * SPACING;
  const pivotY = STRING_LEN;

  useFrame((_, dt) => {
    const amp = reduceMotion ? 0.55 : 0.7;
    let aL = 0;
    let aR = 0;

    if (reduceMotion) {
      aL = -amp;
    } else {
      phase.current = (phase.current + dt * 1.35) % (Math.PI * 2);
      const p = phase.current;
      if (p < Math.PI) aL = -Math.sin(p) * amp;
      else aR = Math.sin(p - Math.PI) * amp;
    }

    const place = (angle: number, x0: number, ball: THREE.Group | null, str: THREE.Mesh | null) => {
      if (!ball || !str) return;
      const tipX = x0 + Math.sin(angle) * STRING_LEN;
      const tipY = pivotY - Math.cos(angle) * STRING_LEN;
      ball.position.set(tipX, tipY, 0);
      str.position.set((x0 + tipX) / 2, (pivotY + tipY) / 2, 0);
      str.rotation.z = -angle;
      const len = Math.hypot(tipX - x0, tipY - pivotY) || STRING_LEN;
      str.scale.set(1, len / STRING_LEN, 1);
    };

    place(aL, xLeft, left.current, leftStr.current);
    place(aR, xRight, right.current, rightStr.current);
  });

  const middles = [1, 2, 3];

  return (
    <group position={[0, -0.2, 0]}>
      <mesh ref={leftStr} position={[xLeft, pivotY / 2, 0]}>
        <cylinderGeometry args={[0.005, 0.005, STRING_LEN, 8]} />
        <meshStandardMaterial color="#bdb6ba" roughness={0.55} metalness={0.15} />
      </mesh>
      <group ref={left} position={[xLeft, 0, 0]}>
        <PorcelainBall />
        <BrandMark />
      </group>

      {middles.map((i) => {
        const x = (i - (COUNT - 1) / 2) * SPACING;
        return (
          <group key={i}>
            <mesh position={[x, pivotY / 2, 0]}>
              <cylinderGeometry args={[0.005, 0.005, STRING_LEN, 8]} />
              <meshStandardMaterial color="#bdb6ba" roughness={0.55} metalness={0.15} />
            </mesh>
            <group position={[x, 0, 0]}>
              <PorcelainBall />
            </group>
          </group>
        );
      })}

      <mesh ref={rightStr} position={[xRight, pivotY / 2, 0]}>
        <cylinderGeometry args={[0.005, 0.005, STRING_LEN, 8]} />
        <meshStandardMaterial color="#bdb6ba" roughness={0.55} metalness={0.15} />
      </mesh>
      <group ref={right} position={[xRight, 0, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[BALL_R, 64, 64]} />
          <meshStandardMaterial map={stripeMap} roughness={0.18} metalness={0.15} />
        </mesh>
      </group>
    </group>
  );
}

function Scene({ reduceMotion }: { reduceMotion?: boolean }) {
  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={0.85} />
      <directionalLight
        castShadow
        position={[2.5, 6, 3]}
        intensity={1.25}
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} color="#f0e0e6" />
      <Cradle reduceMotion={reduceMotion} />
      <ContactShadows position={[0, -0.42, 0]} opacity={0.28} scale={8} blur={2.4} far={4} color="#1c1520" />
      <Environment preset="studio" environmentIntensity={0.55} />
    </>
  );
}

type HeroWorldProps = { reduceMotion?: boolean };

export function HeroWorld({ reduceMotion }: HeroWorldProps) {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.35, 5.2], fov: 32 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene reduceMotion={reduceMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
