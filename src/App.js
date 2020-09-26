import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [amount, setAmount] = useState('')
  const [percent, setPercent] = useState('')
  const [tip, setTip] = useState('0')
  const [data, setData] = useState([])

  const calculateTip = (e) => {
    e.preventDefault()

    const data = {
      amount: amount,
      tip: percent
    }

    console.log('fetching')

    fetch('http://localhost:9000/api/v1/calculatetip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      return res.json()
    }).then((data) => {
      setTip(data.toBePaid)
    })
  }

  return (
    <div className="App">
      <div style={{ "textAlign": "center" }}>
        <form className="container">
          <h1 className="title">Tip Calculator</h1>
          <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <br />
          <input type="text" placeholder="Tip Percentage" value={percent} onChange={(e) => setPercent(e.target.value)} />
          <br />
          <button className="gradient-button gradient-button-4" onClick={calculateTip}>Calculate</button>
          <h1>The total amount is ${tip}</h1>
        </form>
      </div>
    </div >
  );
}

export default App;
