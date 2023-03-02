import React from 'react'
import Answer from './Answer'

export default function Question(props){


    const [userSelection, setUserSelection] = React.useState("") //used to style the answer options depending on whether selected or not

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
    
    //When an answer option is selected, grade the question at the quiz level and save the user's selection
    function handleSelection(answer){
        props.handleAnswer(props.questionText, answer)
        if (userSelection === answer){
            setUserSelection("")
        } else {
            setUserSelection(answer)
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