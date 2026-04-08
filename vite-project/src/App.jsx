import './App.css'
import { useState } from "react";

function App() {

  const [userMove, setUserMove] = useState("");
  const [computerMove, setComputerMove] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleClick = (_userMove) => {

    setUserMove(_userMove);

    // Generate computer move
    let randomNum = Math.random();
    let compMove = "";

    if (randomNum < 0.34) {
      compMove = "ROCK";
    } else if (randomNum < 0.67) {
      compMove = "PAPER";
    } else {
      compMove = "SCISSOR";
    }

    setComputerMove(compMove);

    // Decide winner
    if (_userMove === compMove) {
      // Draw → do nothing
      return;
    }

    if (
      (_userMove === "ROCK" && compMove === "SCISSOR") ||
      (_userMove === "PAPER" && compMove === "ROCK") ||
      (_userMove === "SCISSOR" && compMove === "PAPER")
    ) {
      setUserScore(userScore + 1);
    } else {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div>
      <h1>Computer : User</h1>
      <h2>{computerMove} : {userMove}</h2>
      <h2>{computerScore} : {userScore}</h2>

      <button onClick={() => handleClick("ROCK")}>🪨</button>
      <button onClick={() => handleClick("PAPER")}>📄</button>
      <button onClick={() => handleClick("SCISSOR")}>✂️</button>
    </div>
  );
}

export default App;

