import React from "react";
import quizQuestions from "./quizQuestions";

const QuizResultScreen = ({ quizStartTime, onRestart }) => {
  const quizEndTime = new Date();
  const quizTimeTaken = Math.floor((quizEndTime - quizStartTime) / 1000);

  const correctAnswers = quizQuestions.filter(
    (question) => question.correctAnswer === question.selectedAnswer
  );

  const score = (correctAnswers.length / quizQuestions.length) * 100;

  return (
    <div className="quiz-result-screen">
      <h2>Quiz Completed!</h2>
      <p>
        Your score: {score}% ({correctAnswers.length}/{quizQuestions.length})
      </p>
      <p>Time taken: {quizTimeTaken} seconds</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default QuizResultScreen;
