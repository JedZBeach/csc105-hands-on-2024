import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0)
  const [n, setN] = useState("")
  return (
    <>
      <div>
        <a href="http://localhost:5173/" target="_blank">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dQr28WB5MbMAeIZPyW3xdJFQjAtOFPlAsg&s" className="logo" alt="Vite logo" />
        </a>
        <a href="http://localhost:5173/" target="_blank">
          <img src="https://i.ytimg.com/vi/zq89USzwY2s/maxresdefault.jpg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Simple Calculator</h1>
      <div className="card">
        <button class = "result">
          Result: {result}
        </button>
        <div>
          <input value = {n} onChange={(e) => setN(e.target.value)} placeholder ="Enter a number"/>
        </div>
        <div class = "kiddi">
        <button onClick={() => setResult((result)+ Number(n))}>
          Add
        </button>
        <button onClick={() => setResult((result) => result - Number(n))}>
          Subtract
        </button>
        <button onClick={() => setResult((result) => result * Number(n))}>
          Multiply
        </button>
        <button onClick={() => setResult((result) => result / Number(n))}>
          Divide
        </button>
        <button onClick={() => setN("")}>
          Reset Input
        </button>
        <button onClick={() => setResult((n) => 0)} class = "reset">
          Reset Result
        </button>
        </div>
        <p>
          Huh <code>Huh</code> Huh
        </p>
      </div>
      <p className="read-the-docs">
        Please help me
      </p>
    </>
  )
}

export default App
