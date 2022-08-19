import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';

function App() {
  // step 1 - can update the board
  // step 2 - check which player's turn
  // step 3 - decide who is the winner 

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [ board, setBoard ] = useState(new Array(9).fill(null)); 
  const [xPlayer, setXplayer] = useState(true); // x player stars the game
  const [ scores, setScores ] =useState({xScore: 0, oScore: 0});
  const [ gameOver, setGameOver ] = useState(false);

  const handleClick = (tileIdx) => {
    // state immutability
    const updatedBoard = board.map((value, idx) => {
      if (idx === tileIdx) {
        return xPlayer === true ? "X" : 'O';
      } else {
        return value; // means the tile has been already taken up
      }
    })

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if(winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({...scores, oScore});
      } else {
        let { xScore } = scores;
        xScore =+ 1;
        setScores({...scores, xScore});
      }

    }

    setBoard(updatedBoard);
    setXplayer(!xPlayer);
  }

  // function that checks who is the winner
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(`${board[x]} is the winner!`)
        setGameOver(true);
        return board[x];
      }
    }

  }

  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  const handleResetGameClick = () => [
    resetGame()
  ]

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlayer={xPlayer} />
      <Board board={board} onClick={gameOver ? resetGame() : handleClick}/>
      <button className="reset-btn" onClick={handleResetGameClick}>RESET</button>
    </div>
  );
}

export default App;
