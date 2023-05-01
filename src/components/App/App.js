import Game from '../Game';
import Header from '../Header';
import React from 'react';
import GuessInput from '../GuessInput/GuessInput';

function App() {
  function runGuess(guess) {
    let upperCaseGuess = guess.toUpperCase()
    console.info({ upperCaseGuess });
  }
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <GuessInput runGuess={runGuess}/>

      </div>
    </div>
  );
}

export default App;
