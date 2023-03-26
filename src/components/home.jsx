import React, { Suspense, useContext, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import * as Three from 'three';
import Chest from './Chest';

export default function Home() {

  const [imgSrc, setSrc] = useState('');

  function spawnCryptidImg() {
    const img = new Image();
    img.src = setSrc("./image/world.png");
    
   
   
     // Style the element
     img.style.position = "fixed";
     img.style.top = "30%";
     img.style.left = "57%";
     img.style.transform = "translate(-50%, -50%)";
     img.style.opacity = "1";
     img.style.transition = "opacity 2s ease-in-out";
   
   
   
     // Add the element to the document
     document.body.appendChild(img);
   
     // Wait for the element to render
     setTimeout(() => {
       // Fade out the element
       img.style.opacity = "0";
   
       // Remove the element from the document
       setTimeout(() => {
         document.body.removeChild(img);
       }, 2000); // Wait for the transition to finish
     }, 1000); // Wait for the element to be visible
   
     spawnCryptidRarity();
   }
   
   
   function spawnCryptidRarity() {
   
     const element = document.createElement("div");
     var rarity = "R";
     element.textContent = "OMG YOU JUST GOT A " + rarity;
   
     
     // Style the element
     element.style.position = "fixed";
     element.style.top = "70%";
     element.style.left = "58%";
     element.style.transform = "translate(-50%, -50%)";
     element.style.fontSize = "3em";
     element.style.opacity = "1";
     element.style.transition = "opacity 2s ease-in-out";
     element.style.fontFamily = "Arial";
     
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
  return (
    <div className="canvas">
    <Suspense fallback={null}>
      <Canvas style={{ width: window.innerWidth, height: window.innerHeight }}>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null} />
        <ambientLight intensity={0.5} />
          <Chest position={[0,0,0]} onClick={() =>  spawnCryptidImg()}>
            <img src={imgSrc}/>
          </Chest>
      </Canvas>
      </Suspense>

    </div>
  )
  
}




