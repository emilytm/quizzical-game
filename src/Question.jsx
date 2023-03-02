import React from 'react'
import Answer from './Answer'

export default function Question(props){


    const [userSelection, setUserSelection] = React.useState("")

    //answers 
    //  value
    //  isCorrect
//selectedAnswer

    let answerOptionsArray = props.answers.answerArray.map(answer => {
        return <Answer 
                    value={answer.value} 
                    handleClick={handleSelection} 
                    key={answer.value} 
                    isSelected={userSelection === answer.value ? true : false}
                    isActive={props.isActive}
                    isCorrect={answer.isCorrect}
                />
    })
/*
    function setAsCorrect(){
        console.log("----SETTING A QUESTION AS CORRECT-----")
        props.setAsCorrect()
    } */
    
    function handleSelection(answer){
        console.log("in handleSelection in Question")
        if (userSelection === answer){
            setUserSelection("")
        } else {
            let correctAnswer = props.answers.answerArray.find(option => option.isCorrect === true).value 
            if (answer === correctAnswer) {
                props.setAsCorrect(props.questionText)
            }
        }
    }

    return (
        <div className="question-container">
            <h3>{props.questionText}</h3>
            <div className="options-container">
                {answerOptionsArray}
            </div>
        </div>
    )
}