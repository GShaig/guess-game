import "./styles.css";
import React, { useState } from "react";

export default function App() {

  const [lower, setLower] = useState(1);
  const [upper, setUpper] = useState(10);
  const [number, setNumber] = useState(null);
  const [guess, setGuess] = useState('none');

  function getBounds (event) {
    event.preventDefault();
    var min = Number(event.target[0].value);
    var max = Number(event.target[1].value);
    setLower(min);
    setUpper(max);
    setNumber(Math.trunc((Math.random() * (max - min)) + min));
  }

  function makeGuess (event) {
    event.preventDefault();
    setGuess(event.target[0].value);
  }

  return (
    <div className="container-lg pt-5 p-5 my-5 border">
    <h3 className="text-info">Play!</h3>
    <p className="text-info">Guess the number between {lower} and {upper}</p>
    <p className="text-danger">Last guess: {guess}</p>
    <div>
        {guess < number &&
        <p className="alert alert-warning">Nope. Higher</p>}
        {guess == number &&
        <p className="alert alert-success">You got it!</p>}
        {guess > number &&
        <p className="alert alert-warning">Nope. Lower</p>}
    </div>
    <form onSubmit={makeGuess}>
      <label for='guess'>Guess: </label>
      <input className="bg-light" type='number' name='guess'></input>
      <input className="text-white bg-dark btn" data-bs-toggle="tooltip" title="Good luck!" type='submit' name='attempt' value='Make guess'></input>
    </form>
    <h3>Game Config</h3>
    <form onSubmit={getBounds}>
      <div>
        <label for='lower'>Lower bound: </label>
        <input className="text-white bg-warning" type='number' name='lower'></input>
      </div>
      <div>
        <label for='upper'>Upper bound: </label>
        <input className="text-white bg-primary" type='number' name='upper'></input>
      </div>
      <input className="text-white bg-dark btn" data-bs-toggle="tooltip" title="After click, make a guess!" type='submit' name='reset' value='Reset'></input>
    </form>
   </div>
  );
}
