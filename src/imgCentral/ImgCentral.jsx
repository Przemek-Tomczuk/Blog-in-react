import "./imgCentral.css"
import chess from './chess.jpg';

export default function ImgCentral() {
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