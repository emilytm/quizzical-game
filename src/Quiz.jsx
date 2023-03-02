import React from 'react'
import Question from './Question'

export default function Quiz(props){
    const [quizScore, setQuizScore] = React.useState(0)
    const [isActiveQuiz, setisActiveQuiz] = React.useState(true)

    let questionsCorrect = props.questions.map(question => {
        return {
            value: question.questionText,
            isCorrect: false
        }
    })


    let questionDisplay = props.questions.map(question => {
        return (<Question 
                    questionText={question.questionText} 
                    answers={question.answers} 
                    key={question.questionText} 
                    isActive={isActiveQuiz}
                    selectedAnswer={""}
                    setAsCorrect={addCorrectToScore}/>)
    })

    function handleStartNewGame(){
        props.handleButtonClick()
        setisActiveQuiz(true)
    }

    function handleClick(){
        console.log('in click handler function for button')
        isActiveQuiz ? setisActiveQuiz(false) : handleStartNewGame()
    }

    function addCorrectToScore(questionText){

        console.log(`I'm in addCorrectToScore in Quiz component and setting the following question to correct: ${questionText}`)

        props.questions.find(question => question.questionText === questionText).isCorrect = true

        console.log(`The current score is: ${props.questions.filter(question => question.isCorrect === true).length}`)
        //setQuizScore(prevScore => prevScore+1)
        //console.log(`THE CURRENT QUIZ SCORE IS ${quizScore}`)
    }

    return (
        <div className="quiz-container">
            <h2>Quiz time</h2>
            {questionDisplay}
            <button className='check-answers-btn' onClick={handleClick}>{isActiveQuiz ? 'Check answers' : 'Start new quiz'}</button>
        </div>
    )
}