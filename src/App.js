import "./App.css";
import Colours from "./components/Colours";
import Shapes from "./components/Shapes";
import Numbers from "./components/Numbers";
import Listener from "./components/Listener";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <Colours />
      <Shapes />
      <Numbers />

      <Listener />
    </React.Fragment>
  );
};

export default App;
