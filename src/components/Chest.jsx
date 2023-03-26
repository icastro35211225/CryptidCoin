/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 chest.gltf
Author: Coller (https://sketchfab.com/TheCollerroller)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/minecraft-chest-a3f5bfa3960a4f1a9abd4bcb27fb89ff
Title: Minecraft Chest
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chest.gltf')
  return (
    <>
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Chest} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </>
  )
}

useGLTF.preload('/chest.gltf')
