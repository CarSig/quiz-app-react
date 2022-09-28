import React, { useState } from 'react'
import QuizCard from '../components/Card/QuizCard'
import CategoryLists from './Lists/CategoryLists'
import TagList from './TagList'

function Quiz({ cards }) {
    const removeDuplicates = function (item, index, array) {
        return array.indexOf(item) === index
    }
    // get all categories
    const categories = cards.map(function (card) {
        return card.groups.category
    }).flat().filter(removeDuplicates).sort()


    // get all continents
    const continents = cards.map(function (card) {
        return card.groups.continent
    }).flat().filter(removeDuplicates).sort()

    // get all difficulties
    const difficulties = cards.map(function (card) {
        return card.groups.difficulty
    }).flat().filter(removeDuplicates).sort()

    const [selectedCategories, setSelectedCategories] = useState(categories)
    const [selectedContinents, setSelectedContinents] = useState(continents)
    const [selectedDifficulties, setSelectedDifficulties] = useState(difficulties)
    const [numberOfQuestions, setNumberOfQuestions] = useState(4)
    const [quiz, setQuiz] = useState([])
    const [points, setPoints] = useState(0)
    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)


    const getQuiz = () => {
        let quiz = []
        for (const card of cards) {

            if (selectedCategories.includes(card.groups.category)) {
                if (selectedContinents.includes(card.groups.continent)) {
                    if (selectedDifficulties.includes(card.groups.difficulty)) {
                        quiz.push(card)
                    }


                }

            }
        }
        quiz = quiz.sort(() => Math.random() - 0.5)
        quiz = quiz.slice(0, numberOfQuestions)

        setQuiz(quiz)
        setStarted(true)

    }


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
        setStarted(true)
    }
    return (
        <div><h1>Quiz</h1>
            {!started ?
                <div>
                    <CategoryLists cards={cards} />
                    <button onClick={() => { getRandomCards(3) }}>Start Quiz</button>
                    <button onClick={() => { getQuiz(3, ["History", "Geography"], ["Europe"], ["easy"]) }}>Start Quiz2</button>
                </div> :
                <div>
                    <button onClick={() => { setStarted(false) }}>Reset Quiz</button>

                    {quiz.map(function (card) {
                        return <QuizCard key={card.id} card={card} cards={cards} points={points} setPoints={setPoints} finished={finished} setFinished={setFinished} />
                    })}

                    {finished ? <h1>Points: of {numberOfQuestions}</h1> : <button onClick={() => setFinished(true)}>Submit Answers</button>}
                </div>
            }







        </div>
    )
}

export default Quiz