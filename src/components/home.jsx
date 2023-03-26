import React, { Suspense, useContext, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import * as Three from 'three';
import Chest from './Chest';
import axios from "axios";


export default function Home() {
    const [cards, setCards] = useState(null);
    const [imgSrc, setSrc] = useState('');
    const [rCards, setR] = useState(null);
    const [srCards, setSR] = useState(null);
    const [ssrCards, setSSR] = useState(null);
    const [urCards, setUR] = useState(null);
    async function getCards() {
        await axios.get(`${path}/getCryps`)
            .then((res) => {
                setCards(res.data);
            })
    }


    useEffect(() => {
        getCards();
    }, [])

    const [currentCard, setCurrCard] = useState([]);
    const path = 'http://35.184.229.236:3001';

    function setOtherCards() {
        console.log(cards);
        setR(cards.filter(card => card.rarity === 'r'));
        setSR(cards.filter(card => card.rarity === 'sr'));
        setSSR(cards.filter(card => card.rarity === 'ssr'));
        setUR(cards.filter(card => card.rarity === 'ur'));
    }

    async function spawnCryptidRarity() {
        const rand = Math.random() * 100 + 1;
        let index;
        console.log(rand);
        if (rand >= 1 && rand <= 65) {
            index = Math.round(Math.random() * (rCards.length - 1));
            console.log("rcards" + index);
            console.log(rCards);
            setCurrCard(rCards[index]);
        } else if (rand >= 66 && rand <= 85) {
            index = Math.round(Math.random() * (srCards.length - 1));
            console.log("srcards" + index);
            console.log(srCards);
            setCurrCard(srCards[index]);
        } else if (rand >= 86 && rand <= 95) {
            index = Math.round(Math.random() * (ssrCards.length - 1));
            console.log("ssrcards" + index);
            console.log(ssrCards);
            setCurrCard(ssrCards[index]);
        } else if (rand >= 96 && rand <= 100) {
            index = Math.round(Math.random() * (urCards.length - 1));
            console.log("urcards" + index);
            console.log(urCards);
            setCurrCard(urCards[index]);
        }
        console.log("CURR");
        console.log(currentCard);
    }


    return (

        <div className="canvas">
            <Suspense fallback={null}>
                <Canvas style={{ width: window.innerWidth, height: window.innerHeight }}>
                    <OrbitControls enableZoom={true} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <Chest position={[0, 0, 0]} onClick={() => {
                            console.log(cards);
                            // func to set all other arrs
                            setOtherCards();

                            spawnCryptidRarity();
                            setSrc(currentCard.img);
                        }}>
                        </Chest>
                    </Suspense>
                </Canvas>
            </Suspense>
            <div>
                <img id="small" src={imgSrc} />
            </div>
        </div>
    )

}


