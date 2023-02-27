import React from 'react'
import Answer from './Answer'

export default function Question(props){

    let correctAnswerOption = <Answer value={props.correctAnswer}/>
    let answerOptions = props.incorrectAnswers.map(answerOption => <Answer value={answerOption}/>)

    let randomIndex = Math.ceil(Math.random() * (answerOptions.length + 1))
    console.log(`the length of the incorrect answer options array is ((((${answerOptions.length})))) and the random index is (((${randomIndex})))`)

    answerOptions.splice(randomIndex,0,correctAnswerOption)

    return (
        <div className="question-container">
            <h3>{props.question}</h3>
            <div className="options-container">
                {answerOptions}
            </div>
        </div>
    )
}