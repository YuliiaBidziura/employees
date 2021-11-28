import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import Employees from "./components/Employees";


const App = observer(() => {

  return (
    <BrowserRouter>
      <Employees />
    </BrowserRouter>
  );
});

export default App;
