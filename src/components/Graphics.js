import React from "react";
import{useLoader} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import planet from "../images/world.png"

export default function Graphics(){
    const colorMap = useLoader(TextureLoader, planet);
    return (
        <mesh rotation={[90,0,20]}>
            <boxBufferGeometry attach="geometry" args={[1,1,1]} />
            <meshLambertMaterial map={colorMap}/>
        </mesh>
    );
}