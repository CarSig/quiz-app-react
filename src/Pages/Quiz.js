import React, { useState, useEffect } from 'react'
import Card from '../components/Card/Card'

function Quiz({ cards }) {
    const [quiz, setQuiz] = useState([])


    useEffect(function () {
        getRandomCards(3)
    }, [])

    function getRandomCards(x) {
        const randomCards = []
        for (let i = 0; i < x; i++) {
            const randomCard = cards[Math.floor(Math.random() * cards.length)]
            if (!randomCards.includes(randomCard)) {
                randomCards.push(randomCard)
            } else {
                i--
            }
        }
        setQuiz(randomCards)

    }
    return (
        <div><h1>Quiz</h1>
            {quiz.map(function (card) {
                return <Card key={card.id} card={card} cards={cards} />
            })}
        </div>
    )
}

export default Quiz