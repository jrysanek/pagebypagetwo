import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Showbook from './ShowBook/ShowBook';
import axios from 'axios';
import './App.css';
import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

function App() {
  const [input, setInput] = useState('')
  const [book, setBook] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [wishList, setWishlist] = useState([]);






  useEffect(() => {
    const getBooks = () => {
      let apiKey = process.env.REACT_APP_API_KEY
      axios(`https://www.googleapis.com/books/v1/volumes?q=${input}&orderBy=newest&key=${apiKey}`).then((res) => {
        let filteredData = res.data.items.filter(x => x.volumeInfo.imageLinks)
        setBook(filteredData)
      });
    };
    getBooks()
    if (isLoaded) setIsLoaded(false)
  }, [isLoaded])


   //making the adds book to wishlist function
   const addToWishlist = (book) => {
    if (!localStorage.getItem('wishlist')) {
      localStorage.setItem('wishlist', JSON.stringify([]));
    }
    //new variable to store the book to wishlist
    const newWishlist = JSON.parse(localStorage.getItem('wishlist'));
    newWishlist.push(book.volumeInfo.title);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  }

    const clearInput = () => {
      // setInput([]);
      setBook([]);
    }




  return (
    <div className="app">
      <Header title="Page By Page" />
      
    <div className="nav">
      <Link exact to="/">
        <button className="home-button" onClick={clearInput}>Home</button>
      </Link>

      <SearchBar setInput={setInput} setIsLoaded={setIsLoaded} />
    </div>

      <Route exact path="/">
        <Results addToWishlist={addToWishlist} bookResults={book} />
      </Route>

      <Route path="/Showbook/:index" render={() => < Showbook addToWishlist={addToWishlist} bookResults={book} />} />
      


      <Footer />
    </div>
  );
}

export default App;
