import { useState } from "react";

export function Square({value, onSquareClick}) {
    // const [value, setValue] = useState<string>("");

    // function handleClick() {
    //     setValue('X');
    // }

    return <button className="square" onClick={onSquareClick}>
        {value}
    </button>;
}