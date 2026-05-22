import { Square } from "./Square";

export default function BoardRow({subSquares, startIndex, onSquareClick}) {
    return (
        <div className="board-row">
            <Square value={subSquares[0]} onSquareClick={() => onSquareClick(startIndex + 0)}/>
            <Square value={subSquares[1]} onSquareClick={() => onSquareClick(startIndex + 1)}/>
            <Square value={subSquares[2]} onSquareClick={() => onSquareClick(startIndex + 2)}/>
        </div>
    )
}