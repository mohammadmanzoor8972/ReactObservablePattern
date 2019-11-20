import React, { useState } from "react";
import Observable from "../services/Observerable";

const CompB = props => {
  const [message, setMessage] = useState("");

  Observable.subscribe(function(data) {
    setMessage(data);
  });

  const handler = () => {
    Observable.broadcast("From Component B");
  };

  return (
    <div style={{ width: "300px", border: "1px solid black", height: "250px" }}>
      <h1>Component B</h1>
      {message}
      <button onClick={handler}>Click Me</button>
    </div>
  );
};

export default CompB;
