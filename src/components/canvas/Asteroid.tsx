/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 public/Asteroid.glb --transform 
Files: public/Asteroid.glb [734.13KB] > Asteroid-transformed.glb [37.07KB] (95%)
*/

import React, { useRef } from 'react'
import { Float, Sparkles, useGLTF } from '@react-three/drei'

export const Asteroid = (props) => {
  const { nodes, materials } = useGLTF('./Asteroid-transformed.glb')

  return (
    <Float speed={0.1} rotationIntensity={1} floatIntensity={1} floatingRange={[1, 5]}>
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Asteroids_Mesh.geometry} material={materials.Asteroids_Mat} />
      </group>
    </Float>
  )
}

useGLTF.preload('/Asteroid-transformed.glb')
