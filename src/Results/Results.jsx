import React, { useState } from 'react'

export default function Results(props) {
    const bookList = props.bookResults

    return (
        <div>
            {bookList.map(x => (
                <h1>{x.volumeInfo.title}</h1>
            ))}
            <h1>Hello World</h1>
        </div>
    )
}
