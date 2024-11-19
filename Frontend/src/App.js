import React from "react";
import "./App.css";
import Mainpage from "./Pages/Mainpage";

function App() {
  return (
    <div className="App">
      <div className="popup" style={{ width: "600px", maxWidth: "100%" }}>
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
