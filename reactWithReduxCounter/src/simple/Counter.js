import React from "react"
import { INCREMENT, DECREMENT, RESET } from "./reducers/reducer"

const Counter = ({count,dispatch}) => {
  return (
    <div className="head">
      <h2 >Counter</h2>
      <div className="countcontainer">
        <button onClick={()=>dispatch({type:DECREMENT,val:1})}>-</button>
        <span className="counter"> {count} </span>
        <button onClick={()=>dispatch({type:INCREMENT,val:1})}>+</button>
        <button onClick={()=>dispatch({type:RESET})}>Reset</button>
      </div>
    </div>
  )
}
export default Counter;