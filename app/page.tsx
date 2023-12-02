'use client'

import { Three } from '@/helpers/components/Three'
import { ScrollControls, Scroll } from '@react-three/drei'
import { Suspense, useEffect } from 'react'

import { getProject, val } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { SheetProvider } from '@theatre/r3f'
import { Experience } from '@/components/canvas/Experience'
import theatreState from '../src/theatre/path.json'

export default function Page() {
  // useEffect(() => {
  // studio.extend(extension)
  // studio.initialize()
  // }, [])

  const sheet = getProject('Fly Through', { state: theatreState }).sheet('Scene')

  return (
    <Three>
      <ScrollControls pages={15}>
        <SheetProvider sheet={sheet}>
          <Suspense fallback={null}>
            <Scroll>
              <Experience />
            </Scroll>
          </Suspense>
        </SheetProvider>
      </ScrollControls>
    </Three>
  )
}
