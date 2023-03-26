import React, { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Graphic from './Graphics';
import { UserContext } from "../context/userContext";

export default function Home() {
    const [user, setUser] = useContext(UserContext);
    console.log(user);
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