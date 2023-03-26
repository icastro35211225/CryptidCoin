import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function AllCryps() {
    const [cryps, setCryps] = useState();
    const path = 'https://35.184.229.236:3001';


    async function getCards() {
        await axios.get(`${path}/getCryps`)
            .then((res) => {
                setCryps(res.data.sort((a, b) => a.pos > b.pos ? 1 : -1));
            })
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className='cards'>
            {cryps ? cryps.map((cryp) => <img className='card' key={cryp.name} src={cryp.img} />) : ""}
        </div>
    )

}