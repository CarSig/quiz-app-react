import React from 'react'

function TagList({ cards }) {
    return (
        <div><h1>Tag List</h1>
            {
                // show all tags from elements in cards array
                // use .flat() to flatten the array of arrays
                // use .filter() to remove duplicates
                // sort alphabetically
                // use .map() to render the tags
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