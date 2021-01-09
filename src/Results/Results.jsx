import React, { useState } from 'react'

export default function Results(props) {
    const bookList = props.bookResults



    return (
        <div>

            {bookList.map(x => {
                return (
                    <>
                        <img src={x.volumeInfo.imageLinks.smallThumbnail}  alt={x.volumeInfo.title} />
                        <h1>{x.volumeInfo.title}</h1>
                    </>
                )
            })}

        </div>
    )
}
