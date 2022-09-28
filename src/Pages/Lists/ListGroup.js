import React, { useState } from 'react'
import ListItem from './ListItem'

function ListGroup({ group, cards }) {
    const [show, setShow] = useState(false)

    const getList = () => {
        return (<div className="expanded-group">

            {cards.map(function (card) {
                return card.groups[group]
            }).flat().filter(function (item, index, array) {
                return array.indexOf(item) === index
            }
            ).sort().map(element => {
                return (<ListItem key={element} item={element} cards={cards} parentGroup={group} > {element}</ListItem>)


            })}
        </div>)



    }
    return (
        <div className='group-select' >

            <h2 className="group" onClick={() => setShow(!show)}>{group}</h2>
            <div className="expanded-group">{show && getList()}</div>
        </div>
    )
}

export default ListGroup