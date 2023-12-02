'use client'

import { Sky, Stars, useScroll } from '@react-three/drei'
import dynamic from 'next/dynamic'
import { val } from '@theatre/core'
import { PerspectiveCamera, useCurrentSheet } from '@theatre/r3f'
import { useFrame } from '@react-three/fiber'
import { Extrusion } from '@/components/Extrusion'
import { Asteroid } from './Asteroid'
import { SingleAsteroid2 } from './Asteroid2'
import { SingleAsteroid1 } from './Asteroid1'

const PotatoRider = dynamic(() => import('@/components/canvas/PotatoRider').then((mod) => mod.PotatoRider), {
  ssr: false,
})

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export const Experience = () => {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length)
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 0]} theatreKey='camera' />
      <Sky distance={450000} sunPosition={[0, -5, 0]} inclination={0} azimuth={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <PotatoRider />
      <Asteroid position={[12, 0, 12]} />
      <Asteroid position={[10, 0, -10]} />
      <Asteroid position={[-33, -3, -8]} />
      <Asteroid position={[-50, 0, 15]} />
      <SingleAsteroid2 position={[-10, 0, -5]} scale={3} />
      <SingleAsteroid1 position={[-10, 0, 4]} />
      <Common />
      <Extrusion
        start={[25, 25]}
        paths={[
          [25, 25, 20, 0, 0, 0],
          [30, 0, 30, 35, 30, 35],
          [30, 55, 10, 77, 25, 95],
        ]}
        bevelEnabled
        amount={15}
      />
    </>
  )
}
