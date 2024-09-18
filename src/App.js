import React, { useState } from 'react';
import { Steps as steps } from './Steps';

const ExpertSystem = () => {
  const [currentQuestion, setCurrentQuestion] = useState(steps[0]);
  const [answers, setAnswers] = useState({}); 

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.question]: answer,
    }));

    const nextQuestion = currentQuestion.options[answer];
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion); 
    } else {
      alert('Has completado el sistema experto.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Sistema Experto</h1>
      <p className="text-lg mb-4">{currentQuestion.question}</p>
      <div className="flex space-x-4">
        {Object.keys(currentQuestion.options).map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExpertSystem;
