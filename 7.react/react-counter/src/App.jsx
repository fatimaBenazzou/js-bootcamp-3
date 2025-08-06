import React, { useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        if (counter < 5) setCounter(counter + 1);

        return;
    };

    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
        </div>
    );
}
