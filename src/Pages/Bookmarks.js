import React from 'react'
import Card from '../components/Card/Card'

function Bookmarks({ cards, setCards }) {
    const storageCards = JSON.parse(localStorage.getItem("cards"))


    return (
        <div>
            <h1>Bookmarks</h1>
            {storageCards.filter(function (card) { return card.bookmarked === true }).map(function (card) {
                return <Card key={card.id} card={card} cards={cards} setCards={setCards} />
            })


            }



        </div>
    )
}

export default Bookmarks