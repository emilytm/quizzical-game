import React from 'react'
import Question from './Question'

export default function Quiz(props){
    const questionArray = props.questions.map(question => <Question question={question.question} correctAnswer={question.correct_answer} incorrectAnswers={question.incorrect_answers}/>)
    return (
        <div className="quiz-container">
            <h2>Quiz time</h2>
            {questionArray}
        </div>
    )
}