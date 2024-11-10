const Player = ({ player, score, currentScore, isActive, isWinner }) => {
  return (
    <div
      className={`player player--${player} ${
        isActive ? "player--active" : ""
      } ${isWinner ? "player--winner" : ""}`}
    >
      <h2>Player {player + 1}</h2>
      <p id={`score--${player}`} className="score">
        {score}
      </p>
      <div id={`current--${player}`} className="current-score">
        {currentScore}
      </div>
    </div>
  );
};

export default Player;
