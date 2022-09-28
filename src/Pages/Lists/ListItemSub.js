import React, { useState } from 'react'

function ListItemSub({ element }) {
    const [selected, setSelected] = useState(true)


    return (
        <div onClick={() => setSelected(!selected)} className={`${selected && "selected-subitem"}`} >


            {element}
        </ div>


    )
}

export default ListItemSub