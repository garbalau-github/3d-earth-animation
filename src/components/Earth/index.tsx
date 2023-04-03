export const Earth = () => {
  // Render mesh
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color={'red'} />
      </mesh>
    </>
  );
};
