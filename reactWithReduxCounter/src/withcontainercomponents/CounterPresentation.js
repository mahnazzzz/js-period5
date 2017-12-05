import React from 'react';

const Counter = (props) => {
  const { decrement, increment, reset, count } = props;
  return (
    <div className="head">
      <h2 >Counter</h2>
      <div className="countcontainer">
        <button onClick={decrement}>-</button>
        <span className="counter"> {count} </span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
export default Counter;