import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HomePage from "./pages/home";
import CompA from "./components/CompA";
import CompB from "./components/CompB";

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <HomePage />
      <CompA />
      <CompB />
      <CompA />
      <CompB />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
