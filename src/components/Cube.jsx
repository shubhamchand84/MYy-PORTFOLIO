import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const texture = useTexture('textures/cube.png');

  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Animate on hover change
  useGSAP(
    () => {
      if (!cubeRef.current) return;

      gsap.to(cubeRef.current.rotation, {
        y: '+=2',
        x: '+=2',
        duration: 2,
        repeat: -1,
        ease: 'power1.inOut',
      });
    },
    { scope: cubeRef } // optional
  );

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/cube.glb');

export default Cube;
