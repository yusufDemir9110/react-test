import React, {useState} from 'react'
import "./counter.css"

const Counter = () => {
  const [counterValue,setCounterValue]=useState(0)
  const [inputValue,setInputValue]=useState(1)
  const handleChange=(value)=>{
    setInputValue(parseInt(value))
  }
  const subtract=()=>{
    setCounterValue((prev)=>prev-inputValue)
  }
  const add=()=>{
    setCounterValue((prev)=>prev+inputValue)
  }
  return (
    <div>
        <h2 data-testid="header">My Counter</h2>
        <h1 className={`${counterValue>=100?"green":""}${counterValue<=-100?"red":""}`} data-testid="counter">{counterValue}</h1>
        <button onClick={subtract} data-testid="subtract-btn">-</button>
        <input 
            className='text-align' 
            type="number" 
            data-testid="input" 
            value={inputValue}
            onChange={(e)=>handleChange(e.target.value)}
        />
        <button onClick={add} data-testid="add-btn">+</button>
    </div>
  )
}

export default Counter