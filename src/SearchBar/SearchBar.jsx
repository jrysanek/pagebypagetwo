import React, { useState } from 'react'

export default function SearchBar(props) {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        props.setInput(search)
        props.setIsLoaded(true)
    }


    return (
        <form onSubmit={handleChange} className="search-bar">
            <label htmlFor="search"></label>
            <input
             onChange={e => setSearch(e.target.value)}
             value={search} 
            //  for="search" 
             type="text" />      
             
            <input type="submit" value="submit" />
        </form>
    )
}
