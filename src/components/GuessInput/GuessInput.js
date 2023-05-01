import React from "react";

function GuessInput({ runGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        runGuess(guess);
        setGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={guess}
        pattern="\w{5,5}"
        onChange={(event) => {
          setGuess(event.target.value);
        }}
        validation={{required: {valid: true}}}
      ></input>
      <p>
        <strong>Current Value:</strong> {guess || "(empty)"}
      </p>
    </form>
  );
}

export default GuessInput;
