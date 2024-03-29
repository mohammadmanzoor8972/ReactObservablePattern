import React, { useState } from "react";
import Observable from "../services/Observerable";

const CompA = props => {
  const [message, setMessage] = useState("");

  Observable.subscribe(function(data) {
    setMessage(data);
  });

  return (
    <div style={{ width: "300px", border: "1px solid black", height: "250px" }}>
      <h1>Component A</h1>
      {message}
    </div>
  );
};

export default CompA;
