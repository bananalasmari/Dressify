import React from 'react'

export default function ItemDetails(props) {
    console.log(props.match.params.id)
    const id = props.match.params.id
    return (
        <div>
            <h2>Item Details</h2>
        </div>
    )
}
