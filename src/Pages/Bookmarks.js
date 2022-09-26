import React from 'react'
import Card from '../components/Card/Card'

function Bookmarks({ cards }) {
    return (
        <div>
            <h1>Bookmarks</h1>
            {cards.filter(function (card) { return card.bookmarked === true }).map(function (card) {
                return <Card key={card.id} question={card.question} answer={card.answer} tags={card.tags} bookmarked={card.bookmarked} />
            })


            }
        </div>
    )
}

export default Bookmarks