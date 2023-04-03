export const Earth = () => {
  // Render mesh

  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>
    </>
  );
};
