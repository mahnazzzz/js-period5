import React from 'react';

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

const Display = (props)=>(
  <div className="head">
     <h1 >{props.count}</h1>
  </div>
)

const App = ({store}) => (
  <div>
    <Counter count={store.getState().count}
     dispatch={store.dispatch}
    />
    <Display count={store.getState().count} />
  </div>
)

export default App;