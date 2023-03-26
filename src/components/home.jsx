import React, { Suspense }, { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import THREE from '@react-three/fiber';
//import Graphic from './Graphics';
import Chest from './Chest';
var mouse, raycaster;

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Graphic from './Graphics';
import { UserContext } from "../context/userContext";

export default function Home() {
mouse = new THREE.Vector2();
raycaster = new THREE.Raycaster();    
const [user, setUser] = useContext(UserContext);
    console.log(user);
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

