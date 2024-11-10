const Buttons = ({ onRoll, onHold, onNewGame }) => {
  return (
    <div>
      <button onClick={onRoll} className="btn btn--roll">
        Roll Dice
      </button>
      <button onClick={onHold} className="btn btn--hold">
        Hold
      </button>
      <button onClick={onNewGame} className="btn btn--new">
        New Game
      </button>
    </div>
  );
};

export default Buttons;
