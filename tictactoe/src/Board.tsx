import { useState } from "react";
import BoardRow from "./BoardRow";

export default function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i:number){
        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        setSquares(nextSquares);
    }

    return (
        <>
            <BoardRow subSquares={squares.slice(0, 3)} startIndex={0} onSquareClick={handleClick}/>
            <BoardRow subSquares={squares.slice(3, 6)} startIndex={3} onSquareClick={handleClick}/>
            <BoardRow subSquares={squares.slice(6, 9)} startIndex={6} onSquareClick={handleClick}/>
        </>
    )
}