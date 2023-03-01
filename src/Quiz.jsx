import React from 'react'
import Question from './Question'

export default function Quiz(props){
    const [quizScore, setQuizScore] = React.useState(0)
    const [isActiveQuiz, setisActiveQuiz] = React.useState(true)


    let questionDisplay = props.questions.map(question => {
        return (<Question questionText={question.questionText} answers={question.answers} key={question.questionText} isActive={isActiveQuiz}/>)
    })

    function handleStartNewGame(){
        props.handleButtonClick()
        setisActiveQuiz(true)
    }

    function handleClick(){
        console.log('in click handler function for button')
        isActiveQuiz ? setisActiveQuiz(false) : handleStartNewGame()
    }

    return (
        <div className="quiz-container">
            <h2>Quiz time</h2>
            {questionDisplay}
            <button className='check-answers-btn' onClick={handleClick}>{isActiveQuiz ? 'Check answers' : 'Start new quiz'}</button>
        </div>
    )
}