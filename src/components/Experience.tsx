import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from '@react-three/drei';
import Chair from './Chair';
import { Perf } from 'r3f-perf';

const Experience = () => {
  return (
    <>
      {/* <gridHelper
        position={[0, 0, 0]}
        args={[20, 20, 0xff0000, 'white']}
        rotation-y={Math.PI / 2}
      /> */}
      {/* <axesHelper args={[20]} /> */}
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="city" intensity={0.6} castShadow={false}>
          <Chair />

          <Perf position="top-left" />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            mirror={0}
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default Experience;
