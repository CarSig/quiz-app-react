import React from 'react'

function TagList({ cards }) {
    return (
        <div><h1>Tag List</h1>
            {

                cards.map(function (card) {
                    return card.tags
                }).flat().filter(function (tag, index, array) {
                    return array.indexOf(tag) === index
                }
                ).sort().map(function (tag) {
                    return (<div key={tag}> <a href={`tags/${tag}`} key={tag}>{tag}</a></div>)


                }
                )


            }
        </div>
    )
}

export default TagList