import { TextureLoader } from 'three';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Textures
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthClouds from '../../assets/textures/8k_earth_clouds.jpg';

export const Earth = () => {
  // Load textures
  const [colorMap, normalMap, nightMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthNightMap, EarthSpecularMap, EarthClouds]
  );

  // Render mesh
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.4}
          depthWrite={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};
