import React, { useState, useEffect } from 'react'
import "./Card.css"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';



function Card({ card, cards, setCards }) {
    const [hidden, setHidden] = useState(true)
    const [selectedAnswer, setSelectedAnswer] = useState("")

    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cards))
    }, [cards])

    function toggleBookmark() {
        const updatedCard = { ...card, bookmarked: !card.bookmarked }
        const newArr = cards.map(function (c) {
            if (c.id === card.id) {
                return updatedCard
            }
            return c
        })
        setCards(newArr)
    }





    function toggleHidden() {
        setHidden(!hidden)
    }

    return (
        <div className="card-container" >
            <div onClick={toggleBookmark} >
                {card.bookmarked ? <AiFillStar style={{ fontSize: "1.4rem" }} /> : <AiOutlineStar style={{ fontSize: "1.4rem" }} />}</div>


            <h2 style={{ marginBottom: "2rem" }}>{card.question}</h2>



            <button onClick={toggleHidden} style={{ marginBottom: "2rem" }}>{hidden ? "Show" : "Hide"} answer</button>
            {
                !hidden ?
                    <div> <h3 style={{ marginBottom: "2rem" }}>{card.correctAnswer}</h3>
                        <a href={card.link} target="_blank" rel="noreferrer" >learn more </a></div>
                    : null
            }

            <ul>
                {card.tags.map(function (tag) {
                    return <li key={tag}><a href={`tags/${tag}`}>#{tag}</a>

                    </li>
                })}
            </ul>

        </div >
    )
}

export default Card

