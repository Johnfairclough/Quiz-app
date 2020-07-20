import React, { useState } from 'react';
import { fetch QuizQuestions } from '/API';

//Components
import QuestionCard from './components/QuestionCard';
//types
import { Difficulty } from './API';


const TOTAL_QUESTIONS = 10;


const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, SetUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, SetGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  
  const startTrivia = async () => {};

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
      {/* <QuestionCard 
      questionNr={number +1}
      totalQuestions={TOTAL_QUESTIONS}
      question={question[number].question}
      answers={questions[number].answers}
      userAnswers={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button className="next" onclick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
