
const initialState = {
  count: 0
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

//Action Creators
export const countUp = (val)=> {
  return ({type:INCREMENT,val});
}
export const countDown = (val)=> {
  return ({type:DECREMENT,val});
}
export const reset = ()=> {
  return ({type:RESET});
}

export default function count(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.val
      };
    case DECREMENT:
      return {
        count: state.count - action.val
      };
    case RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
}