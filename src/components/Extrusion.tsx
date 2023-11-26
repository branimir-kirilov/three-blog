import { useMemo } from 'react'
import * as THREE from 'three'
import { editable as e } from '@theatre/r3f'

const LINE_NB_POINTS = 100
const CURVE_DISTANCE = 250

export const Extrusion = ({ start = [0, 0], paths, ...props }) => {
  // TODO: Refactor
  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(10, 0, 1),
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(-20, 2, 1),
      new THREE.Vector3(-30, 2, 5),
      new THREE.Vector3(-50, 1, 1),
      new THREE.Vector3(-60, 1, 1),
      new THREE.Vector3(-70, 1, 1),
      new THREE.Vector3(-80, 1, -2),
      new THREE.Vector3(-90, 1, 1),
      new THREE.Vector3(-120, 2, 1),
      new THREE.Vector3(-150, 2, 1),
      new THREE.Vector3(-200, 2, 1),
      new THREE.Vector3(-300, 2, 1),
    ],
    [],
  )

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, 'catmullrom', 0.5)
  }, [])

  const shape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, -1.08)
    shape.lineTo(0, 1.08)

    return shape
  }, [curve])

  return (
    <e.mesh theatreKey='extrude-path'>
      <extrudeGeometry
        args={[
          shape,
          {
            steps: LINE_NB_POINTS,
            bevelEnabled: false,
            extrudePath: curve,
          },
        ]}
      />
      <meshPhongMaterial />
    </e.mesh>
  )
}
