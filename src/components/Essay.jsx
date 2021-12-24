import React from "react"
import "./styles.css"
import postList from "../posts.json"
import Markdown from "react-markdown"

function Essay(props) {
    const validId = parseInt(props.match.params.id)
    const fetchedPost = {}
    postList.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.content = post.content ? post.content : "No content given"
        }
    })
    document.title = `${fetchedPost.title}`
    return (
        <div className="essay">
            <div className="sectionName">
                <p>{fetchedPost.title}</p>
            </div>
            <div className="date"><p>{fetchedPost.date}</p></div>
            <div className="content"><Markdown children={fetchedPost.content}/></div>
        </div>
    )
}
export default Essay