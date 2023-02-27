import './App.css';
import React from 'react'
import Start from './Start'
import Quiz from './Quiz'

function App() {

  const [questions, setQuestions] = React.useState([])
  const [isActiveQuiz, setIsActiveQuiz] = React.useState(false)

  React.useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  },[1])

console.log(questions)

  function startNewGame(){
    setIsActiveQuiz(true)
  }

  

  return (
    <div className="App">
      {
        isActiveQuiz 
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
