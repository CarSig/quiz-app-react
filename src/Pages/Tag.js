import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card/Card'

function Tag({ cards }) {
    const { tag } = useParams()
    return (
        <div>
            <h1>Questions with tag: {tag}</h1>


            {
                cards.filter(function (card) {
                    return card.tags.includes(tag)
                }).map(function (card) {
                    return <Card key={card.id} card={card} cards={cards} />
                }
                )
            }
        </div>
    )
}

export default Tag