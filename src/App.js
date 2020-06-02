import React, { useState } from 'react';
import Add from './add/Add'
import logo from './images/header.png';
import './App.css';
import GameScore from './gamescore/GameScore';



function App() {

  const [method, setMethod] = useState("add");
  const [gameId, setGameId] = useState(1);
  const [score, setScore] = useState(0);

  var num1 = Math.floor(Math.random() * 9) + 1;
  var num2 = Math.floor(Math.random() * 9) + 1; 

  if ( method !== "add" && num2 > num1)
  {
    let t = num2;
    num2 = num1;
    num1 = t;
  }

  function header()
  {
    if (method === "add")
      return "Addition";
    else
      return "Subtraction";
  }

  function resetGame(theMethod)
  {
    setMethod(theMethod); 
    setGameId(gameId + 1);
  }

  function addButton()
  {
    if (method === "add")
      return null;
    else
      return (<button onClick={() => resetGame("add")}>Switch To Addition Mode</button>);
  }

  function subButton()
  {
    if (method === "sub")
      return null;
    else
      return (<button onClick={() => resetGame("sub")}>Switch To Subtraction Mode</button>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to Wild Kratts {header()}!
      </header>
      <div style={{textAlign: 'left', paddingLeft: '20%'}}>
        <br></br>
        <Add onSuccess={() => {resetGame(method); setScore(score + 10)}} method={method} key={method+gameId.toString()} number1={num1} number2={num2}></Add>
      </div>
      <div>
        <br></br>
        <GameScore score={score}/>
      </div>
      <div> 
        <br></br>
        {addButton()}
        {subButton()}
      </div>
    </div>
  );
}

export default App;
