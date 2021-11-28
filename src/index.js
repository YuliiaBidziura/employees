import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ActiveUsersStore from "./store/ActiveUsersStore";

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    activeUsers: new ActiveUsersStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);