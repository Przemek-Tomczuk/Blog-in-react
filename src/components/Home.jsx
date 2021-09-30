import React from "react";
import "./styles.css"
import chess from './chess.jpg';

function Home() {
    return (
        <div className="imgCentral">
            <img src={chess} alt="chess"/>
            <div className="twoBar">
                <div className="firstBar"></div>
                <div className="secondBar"></div>
            </div>
        </div>
    )
}
export default Home