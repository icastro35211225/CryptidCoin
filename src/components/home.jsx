import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Graphic from './Graphics';

export default function Home() {
    //style={{ width: window.innerWidth, height: window.innerHeight }}
    return (
        <div className="canvas">
            <Suspense fallback={null}>
                <Canvas >
                    <OrbitControls enableZoom={true} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null} />
                    <Graphic />
                </Canvas>
            </Suspense>
        </div>
    )
}