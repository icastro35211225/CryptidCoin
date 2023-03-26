import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import THREE from '@react-three/fiber';
//import Graphic from './Graphics';
import Chest from './Chest';
var mouse, raycaster;


export default function Home() {
mouse = new THREE.Vector2();
raycaster = new THREE.Raycaster();
    return (
        <div className="canvas">
            <Canvas style={{ width: window.innerWidth, height: window.innerHeight }}>
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null} />
                <ambientLight intensity={0.5} />
                <Chest position = {[0,0,0]}/>
            </Canvas>
            
        </div>
    )
}

