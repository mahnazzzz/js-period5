import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducers/reducer";
import "./index.css";
import App from "./simple";

const store = createStore(reducer);

const renderProxy = () => {
  console.log("proxy")
  render(<App store={store} />,
    document.getElementById("root"));
}
renderProxy();
store.subscribe(renderProxy);
