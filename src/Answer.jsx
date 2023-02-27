import React from 'react'

export default function Answer(props){
    console.log(`in the Answer fn and adding an answer option for item: ${props.value}`)
    return (
        <p className="answer-option">{props.value}</p>
    )
}