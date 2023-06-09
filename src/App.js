import React, { useState } from "react";
import "./index.css";
import QuizDetailScreen from "./QuizDetailScreen";
import QuizAttemptScreen from "./QuizAttemptScreen";
import QuizResultScreen from "./QuizResultScreen";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const [quizResult, setQuizResult] = useState({ score: 0, timeTaken: 0 });

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizStartTime(new Date());
  };

  const finishQuiz = (score, timeTaken) => {
    setQuizStarted(false);
    setQuizCompleted(true);
    setQuizResult({ score, timeTaken });
  };

  const restartQuiz = () => {
    setQuizCompleted(false);
    setQuizResult({ score: 0, timeTaken: 0 });
  };

  return (
    <div className="app">
      {!quizStarted && !quizCompleted && (
        <QuizDetailScreen onStart={startQuiz} />
      )}
      {quizStarted && !quizCompleted && (
        <QuizAttemptScreen onFinish={finishQuiz} />
      )}
      {!quizStarted && quizCompleted && (
        <QuizResultScreen quizResult={quizResult} onRestart={restartQuiz} />
      )}
    </div>
  );
};

export default App;
