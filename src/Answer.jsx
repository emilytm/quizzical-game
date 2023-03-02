import React from 'react'

export default function Answer(props){

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
                `}
            onClick={() => props.handleClick(props.value)}
        >{props.value}</p>
    )
}