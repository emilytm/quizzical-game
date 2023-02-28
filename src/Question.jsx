import React from 'react'
import Answer from './Answer'

export default function Question(props){


    const [userSelection, setUserSelection] = React.useState("")
    const [isCorrect, setIsCorrect] = React.useState(false)

    //answers 
    //  value
    //  isCorrect

    console.log(props)

    let answerOptionsArray = props.answers.answerArray.map(answer => {
        return <Answer value={answer.value} handleClick={handleSelection} key={answer.value} isSelected={userSelection === answer.value ? true : false}/>
    })

    
    function handleSelection(answer){
        //apply selection styling
        setUserSelection(answer)
        console.log(`in handleSelection for question ${props.questionText} and setting userSelection to:`)
        setTimeout(() => {console.log(`${answer} WHICH SHOULD MATCH ${userSelection}`)},1500)
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