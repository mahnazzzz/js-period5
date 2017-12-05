import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from "../reducers/reducer"
import CounterPresentation from "./CounterPresentation"

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: ()=> dispatch({type: INCREMENT,val: 5}),
    decrement: ()=> dispatch({type: DECREMENT,val: 5 }),
    reset: ()=> dispatch({ type: RESET }),
  }
}

const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(CounterPresentation);
export default CounterContainer;