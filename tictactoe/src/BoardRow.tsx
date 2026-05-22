import { Square } from "./Square";
import type { BoardSquares } from "./Types";

export default function BoardRow({subSquares, startIndex, onSquareClick}: {subSquares: BoardSquares, startIndex: number, onSquareClick: (i:number) => void}) {
    return (
        <div className="board-row">
            <Square value={subSquares[0]} onSquareClick={() => onSquareClick(startIndex + 0)}/>
            <Square value={subSquares[1]} onSquareClick={() => onSquareClick(startIndex + 1)}/>
            <Square value={subSquares[2]} onSquareClick={() => onSquareClick(startIndex + 2)}/>
        </div>
    )
}