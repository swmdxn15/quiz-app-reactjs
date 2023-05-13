import React, { useState, useEffect } from "react";
import quizQuestions from "./quizQuestions";

const QuizAttemptScreen = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer.");
      return;
    }

    quizQuestions[currentQuestionIndex].selectedAnswer = selectedAnswer;

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft === 0) {
        onComplete();
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onComplete]);

  return (
    <div className="quiz-attempt-screen">
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <li
            key={index}
            className={selectedAnswer === answer ? "selected" : ""}
            onClick={() => handleAnswerSelect(answer)}
          >
            {answer}
          </li>
        ))}
      </ul>
      <p>{timeLeft} seconds left</p>
      <button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
        {currentQuestionIndex < quizQuestions.length - 1
          ? "Next Question"
          : "Finish Quiz"}
      </button>
    </div>
  );
};

export default QuizAttemptScreen;
