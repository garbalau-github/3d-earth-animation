import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import styled from 'styled-components';

// Components
import { Earth } from './components/Earth';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={'Loading...'}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};
