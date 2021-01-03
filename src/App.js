import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, userInput] = useState('')
  const [arr, setArr] = useState([])



const getBooks = async () => {
 
  let apiKey = process.env.REACT_APP_API_KEY
  const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${apiKey}`)

  setArr(response)
}



useEffect(() => {
  getBooks();
  console.log('hello world')
}, [])




  return (
    <div className="App">
      
    </div>
  );
}

export default App;
