const Dice = ({ dice1, dice2, isHidden }) => (
  <div className="dice-container">
    {!isHidden && (
      <>
        <img
          src={`images/dice-${dice1}.png`}
          alt={`Dice ${dice1}`}
          className="dice dice-1"
        />
        <img
          src={`images/dice-${dice2}.png`}
          alt={`Dice ${dice2}`}
          className="dice dice-2"
        />
      </>
    )}
  </div>
);

export default Dice;
