import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"
import './App.css'
import Bike from "./assets/Bike";

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

    return(
        <>
            <Canvas style={{height: '100vh'}}>
                <color attach="background" args={['#151515FF']} />
                <fog attach="fog" args={['#151515FF', 5, 250]} />
                <Suspense fallback={null}>
                    <ambientLight intensity={3}/>
                    <pointLight position={[10, 30,100]} intensity={5} />
                    <pointLight position={[30, 500 ,100]} intensity={5} />
                    <pointLight position={[0, 360 ,100]} intensity={5} />
                    <Bike scale={0.08} position={[0,1,0]} state={state} />
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