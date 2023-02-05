import React, {useState} from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    const [count, setCount] = useState(0);


    // 自作
    // function plus() {
    //     setCount(count + 1)
    // }

    // function minus() {
    //     setCount(count - 1)
    // }

    // 🌸 👩‍🎓functionを書くのはinside componentがrule of thumb
    const increment = () => setCount(count + 1);
　　const decrement = () => setCount(count - 1);

// 👩‍🎓
function add() {
    setCount(prevCount => prevCount + 1)
}
function subtract() {
    setCount(prevCount => prevCount - 1)
}


    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract} >–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}


