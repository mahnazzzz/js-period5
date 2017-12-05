import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from "../reducers/reducer"
const Counter = (props) => {
  return (
    <div className="head">
      <h2 >Counter</h2>
      <div className="countcontainer">
        <button onClick={props.onDecrement}>-</button>
        <span className="counter"> {props.count} </span>
        <button onClick={props.onIncrement}>+</button>
        <button onClick={props.onReset}>Reset</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: ()=> dispatch({type: INCREMENT,val: 1}),
    onDecrement: ()=> dispatch({type: DECREMENT,val: 1 }),
    onReset: ()=> dispatch({ type: RESET }),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);