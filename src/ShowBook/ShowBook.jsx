import React from 'react'
import { useParams } from 'react-router-dom';



export default function ShowBook(props) {

    const { index } = useParams();
    const bookIndex = props.bookResults[index]
    



    return (

        <div className="showbook">
            <h1>{bookIndex.volumeInfo.title}</h1>
            <h2>Author:{bookIndex.volumeInfo.authors}</h2>
            <p>Pages:{bookIndex.volumeInfo.pageCount}</p>
            <img src={bookIndex.volumeInfo.imageLinks.smallThumbnail} alt={bookIndex.volumeInfo.title} />
            <h3>{bookIndex.volumeInfo.description}</h3>
            <a href={bookIndex.volumeInfo.previewLink} target="_blank">See More</a> 
        </div>
    )
}
