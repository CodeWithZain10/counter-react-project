import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    counter = counter + 1
    setCounter(counter)
    if (counter < 1) {
      setCounter(1)
    }
    

  }

  const removeValue = () =>{
    counter = counter - 1
    setCounter(counter)
    if(counter < 1){
      setCounter(0)
    }
  }
  
  return (
    <>
    <h1>Counter Project</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
