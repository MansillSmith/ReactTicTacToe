import { useState } from "react";

export function Square() {
    const [value, setValue] = useState<string>("");

    function handleClick() {
        setValue('X');
    }

    return <button className="square" onClick={handleClick}>
        {value}
    </button>;
}