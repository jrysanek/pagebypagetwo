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

    const clearInput = () => {
      // setInput([]);
      setBook([]);
    }




  return (
    <div className="app">
      <Header title="Page By Page" />

      <Link exact to="/">
        <button className="home" onClick={clearInput}>Home</button>
      </Link>

      <SearchBar setInput={setInput} setIsLoaded={setIsLoaded} />

      <Route exact path="/">
        <Results bookResults={book} />
      </Route>

      <Route path="/Showbook/:index" render={() => < Showbook bookResults={book} />} />
      


      <Footer />
    </div>
  );
}

export default App;
