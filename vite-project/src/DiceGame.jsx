import "./App.css";

import Player from "./components/Player";
import Dice from "./components/Dice";
import Buttons from "./components/Buttons";

import { useState } from "react";

function DiceGame() {
  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [dice, setDice] = useState({ dice1: 1, dice2: 1 });
  const [diceHidden, setDiceHidden] = useState(true);

  const initGame = () => {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setPlaying(true);
    setDiceHidden(true);
  };

  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer((prev) => (prev === 0 ? 1 : 0));
  };

  const rollDice = () => {
    if (playing) {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      setDice({ dice1, dice2 });
      setDiceHidden(false);

      if (dice1 === dice2) {
        switchPlayer();
      } else {
        setCurrentScore((prev) => prev + dice1 + dice2);
      }
    }
  };

  const holdScore = () => {
    if (playing) {
      const newScores = [...scores];
      newScores[activePlayer] += currentScore;
      setScores(newScores);

      if (newScores[activePlayer] >= 100) {
        setPlaying(false);
        setDiceHidden(true);
      } else {
        switchPlayer();
      }
    }
  };

  return (
    <main>
      <Player
        player={0}
        score={scores[0]}
        currentScore={activePlayer === 0 ? currentScore : 0}
        isActive={activePlayer === 0}
        isWinner={!playing && activePlayer === 0}
      />
      <Player
        player={1}
        score={scores[1]}
        currentScore={activePlayer === 1 ? currentScore : 0}
        isActive={activePlayer === 1}
        isWinner={!playing && activePlayer === 1}
      />

      <Dice dice1={dice.dice1} dice2={dice.dice2} isHidden={diceHidden} />
      <Buttons onRoll={rollDice} onHold={holdScore} onNewGame={initGame} />
    </main>
  );
}

export default DiceGame;
