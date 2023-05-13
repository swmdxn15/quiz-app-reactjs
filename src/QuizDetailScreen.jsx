import React, { useState } from "react";
import QuizAttemptScreen from "./QuizAttemptScreen";
import QuizResultScreen from "./QuizResultScreen";

const QuizDetailScreen = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState(null);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizStartTime(new Date());
  };

  const completeQuiz = () => {
    setQuizCompleted(true);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setQuizStartTime(null);
  };

  return (
    <div className="quiz-detail-screen">
      <h1>Daily MS Excel Quiz!</h1>

      {!quizStarted && !quizCompleted && (
        <button onClick={startQuiz}>Start Quiz</button>
      )}
      {quizStarted && !quizCompleted && (
        <QuizAttemptScreen onComplete={completeQuiz} />
      )}
      {quizCompleted && (
        <QuizResultScreen
          quizStartTime={quizStartTime}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
};

export default QuizDetailScreen;
