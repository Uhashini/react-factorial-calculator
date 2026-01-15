import React, { useState } from "react";

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    const n = parseInt(number);

    if (isNaN(n) || n < 0) {
      setResult("Please enter a non-negative integer");
      return;
    }

    const value = factorial(n);
    setResult(value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Factorial Calculator</h1>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateFactorial}>
        Calculate
      </button>

      <br /><br />

      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
