import React, { useState, useEffect } from 'react'
import "./Card.css"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';




function Card({ card, cards, setCards }) {
    const [hidden, setHidden] = useState(true)

    function toggleBookmark() {
        const updatedCard = { ...card, bookmarked: !card.bookmarked }
        const newArr = cards.map(function (c) {
            if (c.id === card.id) {
                return updatedCard
            }
            return c
        })
        localStorage.setItem("cards", JSON.stringify(cards))
        setCards(newArr)

    }

    function toggleHidden() {
        setHidden(!hidden)
    }

    return (
        <div className="card-container" >
            <div onClick={toggleBookmark}>
                {card.bookmarked ? <AiFillStar style={{ fontSize: "1.4rem" }} /> : <AiOutlineStar style={{ fontSize: "1.4rem" }} />}</div>
            <h1>Index: {cards.findIndex(c => c.id === card.id)}</h1>
            <p>{card.bookmarked.toString()}</p>
            <h2 style={{ marginBottom: "2rem" }}>{card.question}</h2>


            <button onClick={toggleHidden} style={{ marginBottom: "2rem" }}>{hidden ? "Show" : "Hide"} answer</button>
            {!hidden ? <p style={{ marginBottom: "2rem" }}>{card.answer}</p> : null
            }

            <ul>
                {card.tags.map(function (tag) {
                    return <li key={tag}>#{tag}</li>
                })}
            </ul>

        </div>
    )
}

export default Card

