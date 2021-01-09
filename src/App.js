import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';

function App() {
  const [input, setInput] = useState('')
  const [book, setBook] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)


const getBooks = async () => {
  let apiKey = process.env.REACT_APP_API_KEY
  const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${input}&orderBy=newest&key=${apiKey}`)
  setBook(response.data.items)
}



useEffect(() => {
  getBooks();
  if (isLoaded) setIsLoaded(false)
}, [isLoaded])





  return (


    <div className="App">

      <SearchBar setInput={setInput} setIsLoaded={setIsLoaded} />
      <Results  bookResults={book} />
    </div>
  );
}

export default App;
