import React, { useState } from 'react';
import { Steps as steps } from './Steps';
import './tailwind.css';

const ExpertSystem = () => {
  const [currentQuestion, setCurrentQuestion] = useState(steps[0]);
  const [answers, setAnswers] = useState({});
  const [finalSolution, setFinalSolution] = useState(null);
  const [finalMessage, setFinalMessage] = useState(null);
  const [recommendation, setRecommendation] = useState(null);


  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.question]: answer,
    }));

    const nextStep = currentQuestion.options[answer];

    if (nextStep) {
      if (nextStep.finalSolution) {
        setRecommendation(null);
        setFinalSolution(nextStep.finalSolution);
        console.log(JSON.stringify(answers));
      } else if (nextStep.finalMessage) {
        setRecommendation(null);
        setFinalMessage(nextStep.finalMessage);
      } else {
        if (nextStep.recommendation) {
          setRecommendation(nextStep.recommendation);
        } else {
          setRecommendation(null);
        }
        setCurrentQuestion(nextStep);
        setFinalMessage(null);
        setFinalSolution(null);
      }
    }
  }


  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col">

      <nav className="mb-[1rem] bg-blue-600 text-white py-3 px-4 sm:py-4 sm:px-6 flex justify-between items-center fixed top-0 left-0 right-0">
        <h1 className="text-base sm:text-xl font-bold truncate"> 
          Sistema Experto de Diagnóstico
        </h1>
        <a
          href="/tree.pdf"
          target="_blank"
          className="text-sm sm:text-lg hover:underline truncate"
        >
          Ver diagrama
        </a>
      </nav>


      <div className="bg-white mt-[8rem] rounded-lg shadow-lg max-w-md mx-auto"> 
        <h2 className="text-center text-xl font-semibold text-blue-600 mb-2">
          Proyecto de Diagnóstico de Averías
        </h2>
        <p className="text-center text-gray-700 mb-4">
          Este sistema experto te ayudará a diagnosticar problemas relacionados con el encendido de vehículos a través de una serie de preguntas y pasos interactivos.
        </p>
      </div>

      <div className="flex items-center justify-center bg-gray-100 p-4"> 
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Sistema Experto</h1>

          {recommendation && (
            <div className="bg-yellow-100 text-yellow-700 p-4 rounded-lg mt-6 text-center">
              <p className="font-bold">Antes de responder, debes de:</p>
              <p>{recommendation}</p>
            </div>
          )}

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
    </div>
  );
}


export default ExpertSystem;

