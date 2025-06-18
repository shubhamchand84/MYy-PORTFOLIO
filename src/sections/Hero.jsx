import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall
        ? [4, -5, 0]
        : isMobile
        ? [5, -5, 0]
        : isTablet
        ? [5.5, -5, 0]
        : [6, -5, 0],
      reactLogoPosition: isSmall
        ? [3, 4, 0]
        : isMobile
        ? [5, 4, 0]
        : isTablet
        ? [6, 4, 0]
        : [7, 4, 0],
      ringPosition: isSmall
        ? [-5, 7, 0]
        : isMobile
        ? [-10, 10, 0]
        : isTablet
        ? [-12, 12, 0]
        : [-14, 14, 0],
      targetPosition: isSmall
        ? [-5, -10, -10]
        : isMobile
        ? [-9, -10, -10]
        : isTablet
        ? [-11, -7, -10]
        : [-13, -13, -10],
    };
  };

  // ✅ CALL calculateSizes to get the values
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen border-2 border-black-500 w-full flex flex-col relative'>
      {/* Text Section */}
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hi, I am Shubham <span className='waving-hand'>🖐️</span>
        </p>
        <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
      </div>

      {/* Canvas Section */}
      <div className='w-full h-full absolute inset-0'>
        <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
          <Suspense fallback={<CanvasLoader />}>
           
             <perspectiveCamera makeDefault position={[0,0,20]}/> 

          <HeroCamera isMobile={isMobile}>
              <HackerRoom
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]}
              scale={sizes.deskScale}
            />
          </HeroCamera>
           <group>
  <Target position={sizes.targetPosition} />
  <ReactLogo position={sizes.reactLogoPosition}/>
  <Cube position={sizes.cubePosition}/>
  <Rings position={sizes.ringPosition}/>
</group>

            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]} />

            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>

      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href='#contact' className='w-fit'>
          <Button name="Lets's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
