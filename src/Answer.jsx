import React from 'react'

export default function Answer(props){
    let isCorrectSubmitted = !props.isActive && props.isSelected && props.isCorrect
    console.log(`Answer option ${props.value} is--- Active: ${props.isActive}, Selected: ${props.isSelected}, and Correct: ${props.isCorrect} ergo isCorrectSubmitted: ${isCorrectSubmitted}`)

    return (
        <p 
            className={
                `answer-option 
                ${props.isSelected && 'selected-answer'} 
                ${props.isActive ? 
                    'active option' : 
                    props.isSelected ? 
                        props.isCorrect ? 
                            'correct-answer' :
                            'incorrect-answer' :
                        'inactive option'}
                `}//${props.isActive === false && props.isCorrect ? 'correct-answer' : 'incorrect-answer' }`}
            onClick={() => props.handleClick(props.value)}
        >{props.value}</p>
    )
}