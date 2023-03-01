import './App.css';
import React from 'react'
import Start from './Start'
import Quiz from './Quiz'
import he from 'he'
import { ReactComponent as YellowBlob } from './blob-yellow.svg'
import { ReactComponent as BlueBlob } from './blob-blue.svg'

function App() {

  const [questions, setQuestions] = React.useState([])
  const [isQuizStarted, setisQuizStarted] = React.useState(false)
  const [quizCount, setQuizCount] = React.useState(1)

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
            answers: {answerArray}
          })
        })
        setQuestions(questionObjects)
      })
  },[quizCount])

  function startNewGame(){
    setQuizCount(prevValue =>  {return (prevValue+1)})
    setisQuizStarted(true)
  }

  return (
    <div className="App">
      <YellowBlob className="blob yellow"/>
      <BlueBlob className="blob blue"/>
      {
        isQuizStarted 
        ? 
          <Quiz questions={questions} handleButtonClick={startNewGame}/>
        :
          <Start 
            handleClick={startNewGame}
          />
      }
    </div>
  );
}

export default App;
