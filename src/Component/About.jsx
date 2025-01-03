import React, { useState } from "react";

const App = () => {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Master Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which JavaScript framework is used for building UI?",
      options: ["Node.js", "React.js", "Django", "Flask"],
      answer: "React.js",
    },
    {
      question: "What is the primary function of CSS?",
      options: [
        "To structure web content",
        "To style web content",
        "To add interactivity to a website",
        "To manage databases",
      ],
      answer: "To style web content",
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Style Query Language",
        "Storage Query Language",
        "System Query List",
      ],
      answer: "Structured Query Language",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="h-screen bg-[#111] flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-bold mb-6 text-center">
        Interview Quiz Game
      </h1>
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        {!gameOver ? (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1}:{" "}
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Game Over! Your Score: {score}/{questions.length}
            </h2>
            <button
              onClick={resetGame}
              className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Restart Game
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
