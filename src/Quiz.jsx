import React from 'react'
import Question from './Question'

export default function Quiz(props){
    const [quizScore, setQuizScore] = React.useState(0)

    let questionDisplay = props.questions.map(question => {
        return (<Question questionText={question.questionText} answers={question.answers} key={question.questionText}/>)
    })

    return (
        <div className="quiz-container">
            <h2>Quiz time</h2>
            {questionDisplay}
        </div>
    )
}