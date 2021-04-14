import React from 'react'

export default function Header(props) {
    return (
        <header style={props.style}>
            <h1>{props.title}</h1>
        </header>

        
    )
}
