"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

type BurgerModelProps = {
  spinSpeed?: number;
};

const PATTY_OFFSETS = [-0.6, 0.02];

const TOP_BUN_CENTER_Y = 0.62;
const TOP_BUN_SCALE: [number, number, number] = [1.08, 0.82, 1.08];
const TOP_BUN_RADIUS = 1.58;

export function BurgerModel({ spinSpeed = 1 }: BurgerModelProps) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current && spinSpeed > 0) {
      groupRef.current.rotation.y += delta * 0.5 * spinSpeed;
    }
  });

  return (
    // Tilted on X/Z so the spin traces a visible "wobbling top" precession
    // instead of turning invisibly in place — every part of this burger
    // (spheres, cylinders) is a surface of revolution around Y, so a
    // straight vertical spin looks completely static from a fixed camera.
    <group rotation={[0.12, 0, 0.16]}>
      <group ref={groupRef}>
        {/* Bottom bun */}
        <mesh position={[0, -1.02, 0]} scale={[1, 0.42, 1]} castShadow receiveShadow>
          <sphereGeometry args={[1.5, 48, 24]} />
          <meshStandardMaterial color="#d79a4c" roughness={0.75} />
        </mesh>

        {/* Patties + cheese */}
        {PATTY_OFFSETS.map((y, i) => (
          <group key={y}>
            <mesh position={[0, y, 0]} rotation={[0, i * 0.4, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[1.56, 1.5, 0.34, 48]} />
              <meshStandardMaterial color="#50291a" roughness={0.95} />
            </mesh>
            <mesh position={[0, y + 0.22, 0]} rotation={[0, 0.32 + i * 0.4, 0]} castShadow>
              <boxGeometry args={[2.9, 0.08, 2.9]} />
              <meshStandardMaterial color="#f5b21c" roughness={0.45} />
            </mesh>
          </group>
        ))}

        {/* Top bun: a dome cap (partial sphere), not a full sphere, so it sits
            on top of the stack instead of swallowing it */}
        <mesh position={[0, TOP_BUN_CENTER_Y, 0]} scale={TOP_BUN_SCALE} castShadow receiveShadow>
          <sphereGeometry args={[TOP_BUN_RADIUS, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
          <meshStandardMaterial color="#e0a655" roughness={0.7} />
        </mesh>

        {/* Sesame seeds sitting on the dome's surface (not buried inside it) */}
        {Array.from({ length: 18 }).map((_, i) => {
          const phi = (i / 18) * Math.PI * 2;
          const theta = 0.18 + (i % 4) * 0.13; // polar angle from the dome's apex
          const x = Math.sin(theta) * Math.cos(phi);
          const y = Math.cos(theta);
          const z = Math.sin(theta) * Math.sin(phi);
          return (
            <mesh
              key={i}
              position={[
                x * TOP_BUN_RADIUS * TOP_BUN_SCALE[0] * 1.01,
                TOP_BUN_CENTER_Y + y * TOP_BUN_RADIUS * TOP_BUN_SCALE[1] * 1.01,
                z * TOP_BUN_RADIUS * TOP_BUN_SCALE[2] * 1.01,
              ]}
              rotation={[(i * 0.73) % Math.PI, (i * 1.31) % Math.PI, 0]}
              scale={[1, 0.6, 1.6]}
            >
              <sphereGeometry args={[0.07, 8, 8]} />
              <meshStandardMaterial color="#fffaf0" roughness={0.4} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}
