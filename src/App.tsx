import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import styled from 'styled-components';

// Components
import { Earth } from './components/Earth';
import { Section } from './components/Section';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = () => {
  return (
    <CanvasContainer>
      {/* Outside of the Canvas */}
      <Section />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};
