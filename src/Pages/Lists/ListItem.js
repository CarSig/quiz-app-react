import React, { useState } from 'react'
import ListItemSub from './ListItemSub'

function ListItem({ item, cards, parentGroup }) {
    const [selected, setSelected] = useState(false)




    const getSubList = (input) => {

        if (parentGroup === "category") {
            return (<div>

                {cards.filter(card => card.groups.category === input).map(card =>
                    card.groups.subcategory
                ).filter((item, index, array) => array.indexOf(item) === index

                ).sort().map(element => <ListItemSub key={element} element={element} cards={cards}> {element}</ListItemSub>)
                }

            </div>)

        }

        if (parentGroup === "continent") {
            return (<div>

                {cards.filter(card => card.groups.continent === input).map(card =>
                    card.groups.country
                ).filter((item, index, array) => array.indexOf(item) === index

                ).sort().map(element => <ListItemSub key={element} element={element} cards={cards}> {element}</ListItemSub>)
                }

            </div>)
        }
    }




    return (

        <div className='item'>
            <div onClick={() => setSelected(!selected)} className={` ${selected && "selected"}`}>
                <div> <h3>{item} </h3></div>


            </div>
            <div className="subitem-container">  {selected && getSubList(item)}</div>

        </div>

    )
}

export default ListItem