import React from 'react';
import Counter from "./Counter";
import Display from "./Display";

const App = ({store}) => (
  <div>
    <Counter count={store.getState().count}
     dispatch={store.dispatch}/>
    <Display count={store.getState().count} />
  </div>
)

export default App;