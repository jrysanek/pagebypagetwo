import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

export default function Results(props) {
    const bookList = props.bookResults



    return (
        <div className="results">
            {bookList.map((x, index) => {
                return (
                    <>
                    <Link to={`/Showbook/${index}`}>
                        <img src={x.volumeInfo.imageLinks.smallThumbnail} key={index}  alt={x.volumeInfo.title} />
                     </Link>
                        <h1 key={x.volumeInfo.title}>{x.volumeInfo.title}</h1>
                    </>
                )
            })}
        </div>
    )
}
