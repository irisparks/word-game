import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";
// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });

  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    //nextGuesses to get the most recent guesses
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses([...guesses, tentativeGuess]);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults answer={answer} validatedGuesses={validatedGuesses} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
