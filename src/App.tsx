import React from 'react';
//Components
import QuestionCard from './components/QuestionCard';


const App = () => {
  
  const startTrivia = async () => {

  }

  const checkAnswer = (e: React .MouseEvent<HTMLButtonElement>) => {

  }
  
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>START</button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onclick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
