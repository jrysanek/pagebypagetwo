import React from 'react';
import './ShowBook.css';
import { useParams } from 'react-router-dom';



export default function ShowBook(props) {

    const { index } = useParams();
    const bookIndex = props.bookResults[index]




    return (

        <div className="showbook">
            <div className="bookinfo">

                
                <h1 className="showtitle">{bookIndex.volumeInfo.title}</h1>
                <h2 className="showauth">{bookIndex.volumeInfo.authors}</h2>
                <img className="showimg" src={bookIndex.volumeInfo.imageLinks.smallThumbnail} alt={bookIndex.volumeInfo.title} />
                <button className="buttonwish" onClick={() => props.addToWishlist(bookIndex)}>Add to wishlist</button>
                <h3 className="showdes">{bookIndex.volumeInfo.description}</h3>
                <a className="seemore" href={bookIndex.volumeInfo.previewLink} target="_blank">See More</a>
            </div>
        </div>
    )
}
