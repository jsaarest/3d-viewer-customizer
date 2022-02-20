import React, {useEffect, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"
import './App.css'

const defaultColors = {
    Base: "#181818",
    Spokes: "#181818",
    Accent: "#fd2121",
    Pedals: "#a41919",
    Rims: "#050505",
    Tires: "#181818",
}

const state = proxy({
    current: null,
    items: defaultColors,
})

function resetColors() {
    state.items = defaultColors;
}

function Picker() {
    const snap = useSnapshot(state)
    return (
        <div style={{ display: snap.current ? "block" : "none" }}>
            <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
            <h1>{snap.current}</h1>
        </div>
    )
}

const ModelViewer = () => {
    function Asset({...props}) {
        const ref = useRef()
        const snap = useSnapshot(state)
        const [hovered, set] = useState(null)
        const { nodes, materials } = useGLTF('/bike-studio.gltf')

        useEffect(() => {
            const cursor = `<svg width="100" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-weight="bold" font-family="Roboto, sans-serif" font-size="14" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
            const auto = `<svg width="100" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
            document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
        }, [hovered])
        useGLTF.preload('/bike-studio.gltf')

        return(
            <group ref={ref} {...props} dispose={null}
               onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
               onPointerOut={(e) => e.intersections.length === 0 && set(null)}
               onPointerMissed={() => (state.current = null)}
               onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.name))}
               {...props}>
                <mesh
                    geometry={nodes['front-spokes'].geometry}
                    material={nodes['front-spokes'].material}
                    position={[0, -0.2, 0.42]}
                    rotation={[0, -Math.PI / 6, 0]}
                    material-color={snap.items.Spokes}
                    name='Spokes'
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
                <mesh geometry={nodes.Pedals.geometry} material={materials.Pedals} rotation={[0, -Math.PI / 6, 0]}  material-color={snap.items.Pedals}
                      name='Pedals'/>
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
                    rotation={[0, -Math.PI / 6, 0]}
                />

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
                <mesh geometry={nodes['frame-big'].geometry} material={materials.Frame} rotation={[0, -Math.PI / 6, 0]} material-color={snap.items.Base}
                      name='Base'/>
                <mesh geometry={nodes.headcap.geometry} material={nodes.headcap.material} rotation={[0, -Math.PI / 6, 0]} />
                <mesh geometry={nodes.panels.geometry} material={nodes.panels.material} rotation={[0, -Math.PI / 6, 0]} material-color={snap.items.Accent}
                      name='Accent'/>
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

    return(
        <>
            <Canvas style={{height: '100vh'}}>
                <color attach="background" args={['#363636']} />
                <fog attach="fog" args={['#151515', 5, 250]} />
                <Suspense fallback={null}>
                    <ambientLight intensity={3}/>
                    <pointLight position={[10, 30,100]} intensity={5} />
                    <pointLight position={[30, 500 ,100]} intensity={5} />
                    <pointLight position={[0, 360 ,100]} intensity={5} />
                    <Asset scale={0.05} position={[0,1,0]}/>
                    {/*<Bike scale={0.05} position={[0, 1, 0]}/>*/}
                </Suspense>
                <mesh rotation-x={-Math.PI / 2} scale={100}>
                    <planeGeometry />
                    <meshStandardMaterial color="#151515FF" roughness={0.1} depthWrite={false} />
                </mesh>
                <OrbitControls  enableZoom={true} enablePan={true} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8}/>
            </Canvas>
        <Picker />
        </>
)
}

export default ModelViewer