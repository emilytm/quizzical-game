import React from 'react'
import Answer from './Answer'

export default function Question(props){


    const [userSelection, setUserSelection] = React.useState("")

    //answers 
    //  value
    //  isCorrect
//selectedAnswer
    console.log(props)

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

    function setAsCorrect(){
        console.log("----SETTING A QUESTION AS CORRECT-----")
        props.setAsCorrect()
    }
    
    function handleSelection(answer){
        console.log(`userSelection was ${userSelection}`)

        console.log("i'm in the answer-click handler in question")
        if (userSelection === answer){
            console.log("UNSELECTING PREVIOUSLY SELECTED OPTION")
            setUserSelection("")
        } else {
            console.log("SELECTING PREVIOUSLY UNSELECTED OPTION")
            setUserSelection(answer)
            let correctAnswer = props.answers.answerArray.find(option => option.isCorrect === true).value 
            console.log(`userSelection is now ${userSelection} and the correctAnswer is ${correctAnswer}`)
            if (userSelection === correctAnswer) {
                console.log('userSelection matched correctAnswer')
                setAsCorrect()
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