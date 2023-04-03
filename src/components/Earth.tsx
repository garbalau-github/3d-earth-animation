import { TextureLoader } from 'three';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// Textures
import EarthDayMap from '../assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from '../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../assets/textures/8k_earth_specular_map.jpg';
import EarthClouds from '../assets/textures/8k_earth_clouds.jpg';
import { useRef } from 'react';

export const Earth = () => {
  // Load textures
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds]
  );

  // Refs
  const earthRef = useRef<THREE.Mesh | null>(null);
  const cloudsRef = useRef<THREE.Mesh | null>(null);

  // Effects
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef.current && cloudsRef.current) {
      earthRef.current.rotation.y = elapsedTime / 6;
      cloudsRef.current.rotation.y = elapsedTime / 6;
    }
  });

  // Render mesh
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color='#fffce1' position={[2, 0, 5]} intensity={1.5} />
      <Stars radius={300} depth={60} factor={10} fade={true} />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          depthWrite={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
};
