import { useState } from "react";
import BoardRow from "./BoardRow";

export default function Board({xIsNext, squares, onPlay}) {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(i:number){
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        if(xIsNext){
            nextSquares[i] = 'X';
        }
        else{
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    return (
        <>
            <div className="status">{status}</div>
            <BoardRow subSquares={squares.slice(0, 3)} startIndex={0} onSquareClick={handleClick}/>
            <BoardRow subSquares={squares.slice(3, 6)} startIndex={3} onSquareClick={handleClick}/>
            <BoardRow subSquares={squares.slice(6, 9)} startIndex={6} onSquareClick={handleClick}/>
        </>
    )
}

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}