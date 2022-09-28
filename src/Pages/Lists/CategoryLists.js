import React from 'react'
import './CategoryLists.css'
import ListItem from "./ListItem"
import ListGroup from './ListGroup'

function CategoryLists({ cards }) {







    return (
        <div>
            <h3>Lists:</h3>




            {

                cards.map(function (card) {
                    return Object.keys(card.groups)
                }).flat().filter(function (item, index, array) {
                    return array.indexOf(item) === index
                }
                ).sort().map(element => {
                    if (element === "continent" || element === "category" || element === "difficulty") {
                        // return getList(element)
                        return (<ListGroup key={element} group={element} cards={cards} />)
                    }



                })

            }
        </div>
    )

}
export default CategoryLists