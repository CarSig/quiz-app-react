import React, { useState, useEffect } from 'react'
import "./Card.css"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';




function Card({ question, answer, tags, bookmarked }) {
    const [mark, setMark] = useState(bookmarked)


    const [hidden, setHidden] = useState(true)

    function toggleBookmark() {
        const newCard =
            setMark(!mark)
    }

    function toggleHidden() {
        setHidden(!hidden)
    }

    return (
        <div className="card-container" >
            <div onClick={toggleBookmark}>
                {mark ? <AiFillStar style={{ fontSize: "1.4rem" }} /> : <AiOutlineStar style={{ fontSize: "1.4rem" }} />}</div>

            <h2 style={{ marginBottom: "2rem" }}>{question}</h2>


            <button onClick={toggleHidden} style={{ marginBottom: "2rem" }}>{hidden ? "Show" : "Hide"} answer</button>
            {!hidden ? <p style={{ marginBottom: "2rem" }}>{answer}</p> : null
            }

            <ul>
                {tags.map(function (tag) {
                    return <li>#{tag}</li>
                })}
            </ul>

        </div>
    )
}

export default Card

