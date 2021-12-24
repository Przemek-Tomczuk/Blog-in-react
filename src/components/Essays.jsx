import React from "react";
import postList from "../posts.json"
import { Link }  from "react-router-dom"
import "./styles.css"


function Essays() {
    document.title = "Notki"
    return (
    <div className="parent">
        <div className="sectionName">
            <p>{document.title}</p>
        </div>
        <div className="listOf">
            {postList.length && 
            postList.map((post, i) => {
                return (
                    <p className="essays"><Link to={`/Essay/${post.id}`}>{post.title}</Link></p>
                )
            })}
        </div>
    </div>
    )
}
export default Essays