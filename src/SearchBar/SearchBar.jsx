import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
    const [search, setSearch] = useState('')
    // const [newSearch, setNewSearch] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        props.setInput(search)
        props.setIsLoaded(true)


        const newSearch = () => {
            setSearch('')
        }
        newSearch()
    }





    return (
        <form onSubmit={handleChange} className="search-bar">
            <label htmlFor="search"></label>
            <input
                onChange={e => setSearch(e.target.value)}
                value={search}
                type="text"
            />

            <input className="search-button" type="submit" value="Submit" />
        </form>
    )
}
