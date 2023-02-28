import React from 'react'

export default function Answer(props){

    return (
        <p 
            className={`answer-option ${props.isSelected && 'selectedAnswer'}`}
            onClick={() => props.handleClick(props.value)}
        >{props.value}</p>
    )
}