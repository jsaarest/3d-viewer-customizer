/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bike-studio.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes['front-spokes'].geometry}
        material={nodes['front-spokes'].material}
        position={[0, -0.2, 0.42]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['front-hub'].geometry}
        material={nodes['front-hub'].material}
        position={[0, -0.2, 0.42]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['front-rim'].geometry}
        material={nodes['front-rim'].material}
        position={[0, -0.2, 0.42]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['front-tire'].geometry}
        material={nodes['front-tire'].material}
        position={[0, -0.2, 0.42]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['front-disk'].geometry}
        material={nodes['front-disk'].material}
        position={[0, -0.2, 0.42]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['front-disk-mount'].geometry}
        material={nodes['front-disk-mount'].material}
        position={[0, -0.2, 0.42]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <group position={[0, 0, 0.28]} rotation={[0, -Math.PI / 6, 0]}>
        <mesh geometry={nodes['front-brake-caliber_1'].geometry} material={nodes['front-brake-caliber_1'].material} />
        <mesh geometry={nodes['front-brake-caliber_2'].geometry} material={nodes['front-brake-caliber_2'].material} />
      </group>
      <mesh
        geometry={nodes['front-rim001'].geometry}
        material={nodes['front-rim001'].material}
        position={[0, -1.02, 42.42]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['front-tire001'].geometry}
        material={nodes['front-tire001'].material}
        position={[0, -1.02, 42.42]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['Bottom-bracket'].geometry}
        material={nodes['Bottom-bracket'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes.Bottom_axle.geometry}
        material={nodes.Bottom_axle.material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh geometry={nodes.cranks.geometry} material={nodes.cranks.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.Pedals.geometry} material={nodes.Pedals.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh
        geometry={nodes['sprocket-rear'].geometry}
        material={nodes['sprocket-rear'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['sprocket-front'].geometry}
        material={nodes['sprocket-front'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh geometry={nodes.chains.geometry} material={nodes.chains.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.disk.geometry} material={nodes.disk.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh
        geometry={nodes['disk-bolts'].geometry}
        material={nodes['disk-bolts'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['disk-mount'].geometry}
        material={nodes['disk-mount'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['rear-spokes'].geometry}
        material={nodes['rear-spokes'].material}
        position={[0.29, 0, 0]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['rear-brake-adapter'].geometry}
        material={nodes['rear-brake-adapter'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <group rotation={[0, -Math.PI / 6, 0]}>
        <mesh geometry={nodes.Cube013.geometry} material={nodes.Cube013.material} />
        <mesh geometry={nodes.Cube013_1.geometry} material={nodes.Cube013_1.material} />
      </group>
      <group rotation={[0, -Math.PI / 6, 0]}>
        <mesh geometry={nodes.motor_1.geometry} material={nodes.motor_1.material} />
        <mesh geometry={nodes.motor_2.geometry} material={nodes.motor_2.material} />
      </group>
      <mesh geometry={nodes['frame-big'].geometry} material={materials.Frame} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.headcap.geometry} material={nodes.headcap.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.panels.geometry} material={nodes.panels.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh
        geometry={nodes['rear-swing'].geometry}
        material={nodes['rear-swing'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['seapost-clamp'].geometry}
        material={nodes['seapost-clamp'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh geometry={nodes.seatpost.geometry} material={nodes.seatpost.material} rotation={[0, -Math.PI / 6, 0]} />
      <group rotation={[0, -Math.PI / 6, 0]}>
        <mesh geometry={nodes['power-button_1'].geometry} material={nodes['power-button_1'].material} />
        <mesh geometry={nodes['power-button_2'].geometry} material={nodes['power-button_2'].material} />
      </group>
      <mesh geometry={nodes.Bolt001.geometry} material={nodes.Bolt001.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.Bolt002.geometry} material={materials['Material.005']} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh
        geometry={nodes['seat-bolts'].geometry}
        material={nodes['seat-bolts'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['rear-axle'].geometry}
        material={nodes['rear-axle'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <group rotation={[0, -Math.PI / 6, 0]}>
        <mesh geometry={nodes['rear-shock_1'].geometry} material={materials['Material.009']} />
        <mesh geometry={nodes['rear-shock_2'].geometry} material={nodes['rear-shock_2'].material} />
        <mesh geometry={nodes['rear-shock_3'].geometry} material={nodes['rear-shock_3'].material} />
        <mesh geometry={nodes['rear-shock_4'].geometry} material={nodes['rear-shock_4'].material} />
      </group>
      <mesh
        geometry={nodes['rear-shock-coil'].geometry}
        material={nodes['rear-shock-coil'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh geometry={nodes.saddle.geometry} material={nodes.saddle.material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh
        geometry={nodes['fork-base'].geometry}
        material={materials.Fork}
        position={[0, -0.29, 0.53]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['fork-knob-right002'].geometry}
        material={nodes['fork-knob-right002'].material}
        position={[0, -5.15, -1.9]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['fork-knob-right003'].geometry}
        material={nodes['fork-knob-right003'].material}
        position={[0, -5.15, -1.9]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes.headtube.geometry}
        material={nodes.headtube.material}
        position={[-2.43, 13.44, -9.53]}
        rotation={[0.44, 0, 0]}
        scale={[1, 3.31, 1]}
      />
      <mesh
        geometry={nodes.headlight.geometry}
        material={nodes.headlight.material}
        position={[0, -0.29, 0.53]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['headlight-bulb'].geometry}
        material={materials['Material.010']}
        position={[0, -0.29, 0.53]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['fork-bolts'].geometry}
        material={materials['Material.013']}
        position={[0, -0.2, 0.58]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['disk-brake-mount'].geometry}
        material={nodes['disk-brake-mount'].material}
        position={[0, -0.03, 0.26]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh geometry={nodes.buttons.geometry} material={materials['Material.008']} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes['ca-3'].geometry} material={nodes['ca-3'].material} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.rubberPad.geometry} material={materials['Material.007']} rotation={[0, -Math.PI / 6, 0]} />
      <mesh geometry={nodes.screen.geometry} material={materials['Material.006']} rotation={[0, -Math.PI / 6, 0]} />
      <mesh
        geometry={nodes['Ca-holder'].geometry}
        material={nodes['Ca-holder'].material}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes.grips.geometry}
        material={nodes.grips.material}
        position={[0, 0, 0.3]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes.handlebar.geometry}
        material={nodes.handlebar.material}
        position={[0, 0, 0.3]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes.stem.geometry}
        material={nodes.stem.material}
        position={[0, 0, 0.3]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['stem-bolts'].geometry}
        material={nodes['stem-bolts'].material}
        position={[0, 0, 0.3]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['brake-right'].geometry}
        material={nodes['brake-right'].material}
        position={[0, 0, 0.3]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['brake-right-cable'].geometry}
        material={nodes['brake-right-cable'].material}
        position={[0, 0, 0.3]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <group position={[0, 0, 0.3]} rotation={[0, -Math.PI / 6, 0]}>
        <mesh geometry={nodes.Cylinder046.geometry} material={nodes.Cylinder046.material} />
        <mesh geometry={nodes.Cylinder046_1.geometry} material={nodes.Cylinder046_1.material} />
      </group>
      <group position={[0, 0, 0.3]} rotation={[0, -Math.PI / 6, 0]}>
        <mesh geometry={nodes.Cylinder032.geometry} material={nodes.Cylinder032.material} />
        <mesh geometry={nodes.Cylinder032_1.geometry} material={materials['Matte Black']} />
      </group>
      <mesh
        geometry={nodes['headlight-switch-cable'].geometry}
        material={nodes['headlight-switch-cable'].material}
        position={[0, 0, 0.3]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        geometry={nodes['front-cable'].geometry}
        material={nodes['front-cable'].material}
        position={[0.41, -0.15, 0.3]}
        rotation={[0, -Math.PI / 6, 0]}
      />
    </group>
  )
}

useGLTF.preload('/bike-studio.gltf')