import React from 'react'
import Card from '../components/Card/Card'


function Home({ cards }) {
    return (
        <div>

            {cards.map(function (card) {
                return <Card key={card.id} question={card.question} answer={card.answer} tags={card.tags} bookmarked={card.bookmarked} />
            })}
        </div>
    )
}

export default Home