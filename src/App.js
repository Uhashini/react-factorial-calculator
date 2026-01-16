import React, { useState } from "react";

// Factorial function
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// Fibonacci function
function fibonacci(n) {
  let series = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    series.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return series;
}

// Prime check function
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function App() {
  const [number, setNumber] = useState("");
  const [factResult, setFactResult] = useState(null);
  const [fibResult, setFibResult] = useState([]);
  const [primeResult, setPrimeResult] = useState(null);

  const calculateAll = () => {
    const n = parseInt(number);

    if (isNaN(n) || n < 0) {
      alert("Please enter a non-negative integer");
      return;
    }

    setFactResult(factorial(n));
    setFibResult(fibonacci(n));
    setPrimeResult(isPrime(n));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Number Operations</h1>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateAll}>
        Calculate
      </button>

      <br /><br />

      {factResult !== null && (
        <h2>Factorial: {factResult}</h2>
      )}

      {fibResult.length > 0 && (
        <h2>Fibonacci Series: {fibResult.join(", ")}</h2>
      )}

      {primeResult !== null && (
        <h2>
          Prime Check: {primeResult ? "Prime Number" : "Not a Prime Number"}
        </h2>
      )}
    </div>
  );
}

export default App;
