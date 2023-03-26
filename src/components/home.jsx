import React, { Suspense, useContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import * as Three from 'three';
import { UserContext } from "../context/userContext";
import Chest from './Chest';

export default function Home() {
  const [user, setUser] = useContext(UserContext);
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  }

  return (
    <div className="canvas">
    <Suspense fallback={null}>
      <Canvas style={{ width: window.innerWidth, height: window.innerHeight }}>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null} />
        <ambientLight intensity={0.5} />
          <Chest position={[0,0,0]} onClick={() =>  spawnCryptid()} />
      </Canvas>
      </Suspense>

    </div>
  )
  
}


function spawnCryptid()
{
    const element = document.createElement("div");
  element.textContent = "Hello!";
  
  // Style the element
  element.style.position = "fixed";
  element.style.top = "80%";
  element.style.left = "50%";
  element.style.transform = "translate(-50%, -50%)";
  element.style.fontSize = "3em";
  element.style.opacity = "1";
  element.style.transition = "opacity 2s ease-in-out";
  
  // Add the element to the document
  document.body.appendChild(element);
  
  // Wait for the element to render
  setTimeout(() => {
    // Fade out the element
    element.style.opacity = "0";
    
    // Remove the element from the document
    setTimeout(() => {
      document.body.removeChild(element);
    }, 2000); // Wait for the transition to finish
  }, 1000); // Wait for the element to be visible
}
