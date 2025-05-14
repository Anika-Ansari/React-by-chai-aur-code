import { useState, useEffect } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
    else {
      alert("counter cannot go on 20")
    }
  }

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    else {
      alert("counter cannot go below 0")
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removevalue}> Remove Value</button>
    </>
  )
}

export default App
