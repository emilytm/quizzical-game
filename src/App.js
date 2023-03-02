import './App.css';
import React from 'react'
import Start from './Start'
import Question from './Question'
import he from 'he'
import {nanoid } from 'nanoid'
import { ReactComponent as YellowBlob } from './blob-yellow.svg'
import { ReactComponent as BlueBlob } from './blob-blue.svg'

function App() {
  
  const [isActiveQuiz, setisActiveQuiz] = React.useState(true) //used to determine whether quiz is interactive or done/graded
  const [questions, setQuestions] = React.useState([]) //used to store the array of questions from the API
  const [quizId, setQuizId] = React.useState("") //used to generate new quizzes as appropriate in the useEffect dependency array
  const [quizScore, setQuizScore] = React.useState(0) //used to keep track of how many questions are answered correctly

  //Fetch 5 questions in any category of type: multiple choice from the Open Trivia DB API
  React.useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
      .then(res => res.json())
      .then(data => {
        let questionsArray = data.results
        let questionObjects = questionsArray.map(question => {
          let answerArray = question.incorrect_answers.map(answerOption => {
            let decodedAnswerOption = he.decode(answerOption)
            return ({
              value: decodedAnswerOption,
              isCorrect: false
            })
          })

          let randomIndex = Math.ceil(Math.random() * (answerArray.length + 1));
          answerArray.splice(randomIndex, 0, {value: question.correct_answer, isCorrect: true})
          let decodedQuestion = he.decode(question.question)
          return ({
            questionText: decodedQuestion,
            answers: {answerArray},
            isCorrect: false
          })
        })
        setQuestions(questionObjects)
      })
  },[quizId])

  //Get a new quizId to start a new quiz game and set it to active so the questions are interactive
  function startNewGame(){
    setQuizId(nanoid())
    setisActiveQuiz(true)
  }

  //If the quiz is active, set it to inactive, but if it is already inactive, start a new quiz
  function handleClick(){
    isActiveQuiz ? setisActiveQuiz(false) : startNewGame()
  }

  //Based on the question and the answer, grade the question and update the quiz score
  function gradeQuestion(questionText, answer){
    let correctAnswer = questions.find(question => question.questionText === questionText).answers.answerArray.find(option => option.isCorrect === true).value 
    if (answer === correctAnswer) {
      questions.find(question => question.questionText === questionText).isCorrect = true
    } else {
      questions.find(question => question.questionText === questionText).isCorrect = false
    }
    setQuizScore(questions.filter(question => question.isCorrect === true).length)
  }

  //Get the array of Question components representing each question in this quiz
  let questionDisplay = questions.map(question => {
    return (<Question 
                questionText={question.questionText} 
                answers={question.answers} 
                key={question.questionText} 
                isActive={isActiveQuiz}
                selectedAnswer={""}
                handleAnswer={gradeQuestion}/>)
  })

//if there is not yet a quizId, display the start page, but if there is one, display the quiz
  return (
    <div className="App">
      <YellowBlob className="blob yellow"/>
      <BlueBlob className="blob blue"/>
      {
        quizId 
        ? 
          <div className="quiz-container">
              <h2>Quiz time</h2>
              {questionDisplay}
              <h4>{
                !isActiveQuiz && `You scored ${quizScore}/5 correct answers` 
              }</h4>
              <button className='check-answers-btn' onClick={handleClick}>{isActiveQuiz ? 'Check answers' : 'Start new quiz'}</button>
          </div>
        :
          <Start 
            handleClick={startNewGame}
          />
      }
    </div>
  );
}

export default App;
