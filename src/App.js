import './App.css';
import React from 'react'
import Start from './Start'
import Quiz from './Quiz'

function App() {

  const [questions, setQuestions] = React.useState([])
  const [isQuizStarted, setisQuizStarted] = React.useState(false)

  React.useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
      .then(res => res.json())
      .then(data => {

        let questionsArray = data.results
        let questionObjects = questionsArray.map(question => {
          let answerArray = question.incorrect_answers.map(answerOption => {
            return ({
              value: answerOption,
              isCorrect: false
            })
          })

          let randomIndex = Math.ceil(Math.random() * (answerArray.length + 1));
          answerArray.splice(randomIndex, 0, {value: question.correct_answer, isCorrect: true})

          return ({
            questionText: question.question,
            answers: {answerArray}
          })
        })
        setQuestions(questionObjects)
      })
  },[1])

  function startNewGame(){
    setisQuizStarted(true)
  }

  return (
    <div className="App">
      {
        isQuizStarted 
        ? 
          <Quiz questions={questions}/>
        :
          <Start 
            handleClick={startNewGame}
          />
      }
    </div>
  );
}

export default App;
