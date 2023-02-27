import React from 'react'

export default function Start(props){
    return (
        <div className="start-container">
            <h1>Quizzical</h1>
            <h3>Test your trivia knowledge!</h3>
            <button onClick={props.handleClick} className="start-btn">Start quiz</button>
        </div>
    )
}