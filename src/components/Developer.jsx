import React, { useEffect, useMemo, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  // Load and clone GLTF model
  const { scene } = useGLTF('/models/animations/developer.glb');
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clonedScene);

  // Load FBX animations
  const { animations: idleAnim } = useFBX('/models/animations/idle.fbx');
  const { animations: saluteAnim } = useFBX('/models/animations/salute.fbx');
  const { animations: clapAnim } = useFBX('/models/animations/clapping.fbx');
  const { animations: victoryAnim } = useFBX('/models/animations/victory.fbx');

  // Rename animations for easy switching
  idleAnim[0].name = 'idle';
  saluteAnim[0].name = 'salute';
  clapAnim[0].name = 'clapping';
  victoryAnim[0].name = 'victory';

  const { actions } = useAnimations(
    [idleAnim[0], saluteAnim[0], clapAnim[0], victoryAnim[0]],
    group
  );

  // Animation effect with safe fallback
  useEffect(() => {
    const action = actions[animationName];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    } else {
      console.warn(`Animation '${animationName}' not found.`);
    }
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* You can also render the full clone instead of just nodes.Hips if needed */}
      {/* <primitive object={clonedScene} /> */}

      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  );
};

// Preload for better performance
useGLTF.preload('/models/animations/developer.glb');
useFBX.preload('/models/animations/idle.fbx');
useFBX.preload('/models/animations/salute.fbx');
useFBX.preload('/models/animations/clapping.fbx');
useFBX.preload('/models/animations/victory.fbx');

export default Developer;
