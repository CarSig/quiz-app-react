import React, { useState, useEffect } from 'react'
import "./Card.css"




function QuizCard({ card, cards, setCards, points, setPoints, finished, setCorrectAnswers, correctAnswers }) {

    const [selectedAnswer, setSelectedAnswer] = useState("")

    useEffect(() => {
        if (selectedAnswer === card.correctAnswer) {

        }
    }, [finished])



    function setAnswer(answer) {
        if (!finished) {
            setSelectedAnswer(answer)
        }
    }




    return (
        <div className="card-container" >



            <h2 style={{ marginBottom: "2rem" }}>{card.question}</h2>
            {
                //
                <ol className="answerSelection" >
                    {card.answers.map(function (answer) {
                        return <li className={answer === selectedAnswer ? "answer selectedAnswer" : "answer"} onClick={() => setAnswer(answer)}>{answer}</li>
                    })}
                </ol>
            }


            {
                finished ? (
                    <div>
                        <h3 style={{ marginBottom: "2rem", color: card.correctAnswer === selectedAnswer ? "green" : "red" }}>{card.correctAnswer}</h3>


                        <a href={card.link} target="_blank" rel="noreferrer" >learn more </a>

                    </div>) : null

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

export default QuizCard

