import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    function handleClick(x) {
        setCount(count + x);
    }
    return (
        <>
            <div className="">
                <h1 className="">count: {count}</h1>
                <button onClick={() => handleClick(1)}>incr</button>
                <button onClick={() => handleClick(-1)}> decr </button>
            </div>
        </>
    );
}
export default Counter;