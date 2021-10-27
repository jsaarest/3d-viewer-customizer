import React, {useEffect, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { HexColorPicker } from "react-colorful"
import { proxy, useSnapshot } from "valtio"
import './App.css'

const state = proxy({
    current: null,
    items: {
        Handle: "#ffffff",
        Base: "#ffffff",
        Saddle: "#ffffff",
        Wheels: "#1c1c1c",
        Join_Brake: "#ffffff",
        Details: "#ffffff",
        band: "#ffffff",
        patch: "#ffffff",
    },
})

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
    function Asset() {
        const ref = useRef()
        const snap = useSnapshot(state)
        const [hovered, set] = useState(null)
        const { nodes, materials } = useGLTF('/scene.gltf')

        useEffect(() => {
            const cursor = `<svg width="100" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-weight="bold" font-family="Roboto, sans-serif" font-size="14" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
            const auto = `<svg width="100" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
            document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
        }, [hovered])
        useGLTF.preload('/scene.gltf')

        return(
            <group ref={ref}
                   dispose={null}
                   onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
                   onPointerOut={(e) => e.intersections.length === 0 && set(null)}
                   onPointerMissed={() => (state.current = null)}
                   onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.name))}
            >
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-75.57, 66.11, -15.69]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Base_Base_0.geometry} material={materials.Base} material-color={snap.items.Base} name='Base'/>
                        </group>
                        <group position={[67.88, 211.95, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Handlebar_Handle_0.geometry}  material={materials.Handle} material-color={snap.items.Handle} name='Handle'/>
                        </group>
                        <group position={[-73.18, 225.96, 0]} rotation={[-Math.PI / 2, -0.1, 0]} scale={[48.16, 48.16, 48.16]}>
                            <mesh geometry={nodes.Saddle_Saddle_0.geometry}  material={materials.Saddle} material-color={snap.items.Saddle} name='Saddle'/>
                        </group>
                        <group position={[-127.64, 80.26, -0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Wheels_Wheels_0.geometry} material={materials.Wheels} material-color={snap.items.Wheels} name='Wheels'/>
                        </group>
                        <group position={[-92.67, 137.61, -9.35]} rotation={[-Math.PI / 2, -0.95, -1.57]} scale={[1.36, 1.36, 2.39]}>
                            <mesh geometry={nodes.Brake_Joint_Brake_0.geometry} material={materials.Joint_Brake} material-color={snap.items.Join_Brake} name='Join_Brake'/>
                        </group>
                        <group position={[44.89, 87.24, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Pedals_Details_0.geometry} material={materials.Details} material-color={snap.items.Details} name='Details' />
                        </group>
                        <group position={[-82.55, 153.87, -2.33]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
                            <mesh geometry={nodes.Chains_Chains_0.geometry} material={nodes.Chains_Chains_0.material} />
                            <mesh geometry={nodes.Chains_Chains_0_1.geometry} material={nodes.Chains_Chains_0_1.material} />
                            <mesh geometry={nodes.Chains_Chains_0_2.geometry} material={nodes.Chains_Chains_0_2.material} />
                            <mesh geometry={nodes.Chains_Chains_0_3.geometry} material={nodes.Chains_Chains_0_3.material} />
                        </group>
                    </group>
                </group>
            </group>
        )
    }

    return(
        <>
            <Canvas style={{height: '100vh'}}>
                <color attach="background" args={['#ffffff']} />
                <fog attach="fog" args={['#ffffff', 10, 50]} />
                <Suspense fallback={null}>
                    <ambientLight intensity={2}/>
                    <pointLight position={[10, 10,10]} intensity={5} />
                    <pointLight position={[5, 150 ,1]} intensity={5} />
                    <Asset/>
                </Suspense>
                <mesh rotation-x={-Math.PI / 2} scale={100}>
                    <planeGeometry />
                    <meshStandardMaterial color="#ffffff" transparent depthWrite={false} />
                </mesh>
                <OrbitControls  enableZoom={true} enablePan={true} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.8}/>
            </Canvas>
        <Picker />
        </>
)
}

export default ModelViewer