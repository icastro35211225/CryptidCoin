import React, { useState } from "react";

import { scores } from "./data";

export default function Leaderboard() {
    const [board, setBoard] = useState(scores.sort((a, b) => a.score > b.score ? -1 : 1));

    return (
        <div id="profile">
            {
                board.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />

                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>
                                <span>{value.location}</span>
                            </div>
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}
