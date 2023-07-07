import initialQuestions from "../components/questions.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Timer set to 60 seconds
  const [questions, setQuestions] = useState(initialQuestions);

  useEffect(() => {
    if (timeLeft > 0 && showScore === false && gameStarted === true) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowScore(true);
    }
  }, [timeLeft, showScore, gameStarted]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(60);
    const shuffledQuestions = shuffleArray(initialQuestions);
    setQuestions(shuffledQuestions);
  };

  const handleReset = () => {
    setGameStarted(false);
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(60);
    const shuffledQuestions = shuffleArray(initialQuestions);
    setQuestions(shuffledQuestions);
  };

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-app bg-choc min-h-screen w-screen p-14 lg:p-32">
      {!gameStarted ? (
        <div className="group text-green-800 transition-all duration-300 ease-in-out">
          <button
            onClick={handleStartGame}
            className="uppercase bg-left-bottom bg-gradient-to-r from-green-800 to-green-800 bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out font-bold my-10"
          >
            Start Game
          </button>
        </div>
      ) : showScore ? (
        <div className="score-section">
          <h2 className="text-2xl my-10 text-greyish">Your score: {score}</h2>
          <div className="group text-gold transition-all duration-300 ease-in-out">
            <button
              onClick={handleReset}
              className="uppercase bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out font-bold my-10"
            >
              Reset
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <h2 className="font-semibold text-xl my-5 text-burnt">
              Question {currentQuestion + 1}
            </h2>
            <h3 className="text-2xl font-extralight my-5 text-greyish">
              {questions[currentQuestion].question}
            </h3>
          </div>
          <div className="answer-section w-full text-lg flex flex-col items-start font-extralight">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                className="rounded-lg text-left px-2 bg-yell hover:bg-gold my-1 py-2 w-[100%] md:max-w-[22%] text-choc"
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="timer-section my-10">
            <p className="font-thin text-greyish">Time Left: {timeLeft} seconds</p>
          </div>
        </>
      )}
      <div className="flex">
        <div className="group text-gold transition-all duration-300 ease-in-out">
          <Link to="/africadyk/">
            <button className="uppercase bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out font-bold tracking-wider">
              Back to home
            </button>
          </Link>
        </div>
        <div className="group text-gold transition-all duration-300 ease-in-out">
          <button
            onClick={handleReset}
            className="uppercase bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_5px] bg-no-repeat group-hover:bg-[length:0%_5px] transition-all duration-700 ease-out font-bold ml-5 tracking-wider"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
