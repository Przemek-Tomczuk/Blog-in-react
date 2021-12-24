import React from "react";
import "./styles.css"
import chess from './capa.png';

function Home() {
    document.title = "Przemysław Tomczuk Blog"
    return (
        <div className="imgCentral">
            <img src={chess} alt="chess"/>
        </div>
    )
}
export default Home