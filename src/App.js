import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';
import Header from './Layout/Header';

function App() {
  const [input, setInput] = useState('')
  const [book, setBook] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)






  useEffect(() => {
    const getBooks = () => {
      let apiKey = process.env.REACT_APP_API_KEY
      axios(`https://www.googleapis.com/books/v1/volumes?q=${input}&orderBy=newest&key=${apiKey}`).then((res) => {
        let filteredData = res.data.items.filter(x => x.volumeInfo.imageLinks)
      console.log(filteredData)
        setBook(filteredData)
      });
    };
    getBooks()
    if (isLoaded) setIsLoaded(false)
  }, [isLoaded])





  return (
    <div className="App">
      <Header title="Page By Page" />

      <SearchBar setInput={setInput} setIsLoaded={setIsLoaded} />
      
      <Results bookResults={book} />

    </div>
  );
}

export default App;
