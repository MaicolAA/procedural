import React, { useState } from 'react';
import { Steps as steps } from './Steps';
import './tailwind.css';

const ExpertSystem = () => {
  const [currentQuestion, setCurrentQuestion] = useState(steps[0]);
  const [answers, setAnswers] = useState({});
  const [finalSolution, setFinalSolution] = useState(null);
  const [finalMessage, setFinalMessage] = useState(null);

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.question]: answer,
    }));

    const nextStep = currentQuestion.options[answer];

    if (nextStep) {
      if (nextStep.finalSolution) {
        setFinalSolution(nextStep.finalSolution);
      }
      else if (nextStep.finalMessage) {
        setFinalMessage(nextStep.finalMessage);
      } else {
        setCurrentQuestion(nextStep);
        setFinalMessage(null);
        setFinalSolution(null);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Sistema Experto</h1>

        <p className="text-lg text-gray-700 text-center mb-6">{currentQuestion.question}</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.keys(currentQuestion.options).map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              {option}
            </button>
          ))}
        </div>

        {finalSolution && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mt-6 text-center">
            <p className="font-bold">Solución Final:</p>
            <p>{finalSolution}</p>
          </div>
        )}

        {finalMessage && (
          <div className="bg-red-100 text-black-700 p-4 rounded-lg mt-6 text-center">
            <p className="font-bold">Mensaje</p>
            <p>{finalMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertSystem;
