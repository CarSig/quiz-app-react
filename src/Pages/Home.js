import React from 'react'
import Card from '../components/Card/Card'


function Home({ cards, setCards }) {


    return (
        <div>



            {cards.map(function (card) {
                return <Card key={card.id} card={card} cards={cards} setCards={setCards} />
            })}
        </div>
    )
}

export default Home