import { useMemo } from 'react'
import * as THREE from 'three'
import { editable as e } from '@theatre/r3f'

const LINE_NB_POINTS = 1000
const CURVE_DISTANCE = 250

export const Extrusion = ({ start = [0, 0], paths, ...props }) => {
  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(10, 0, -1),
      new THREE.Vector3(-CURVE_DISTANCE, 1, 0),
      //   new THREE.Vector3(-CURVE_DISTANCE, 5, 0),
      //   new THREE.Vector3(-CURVE_DISTANCE * 5, 0, 0),
      //   new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      //   new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      //   new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      //   new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      //   new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      //   new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
    ],
    [],
  )

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, 'catmullrom', 0.5)
  }, [])

  const shape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, -2.08)
    shape.lineTo(0, 2.08)

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
