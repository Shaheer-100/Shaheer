import React from 'react';
import { useState } from 'react';
import './Counter.css'

function Counter(){
      const [counter,setCounter]=useState(0);
      function handleIncrement(){
        setCounter(counter+1)
      }
      function handleDecrement(){
        setCounter(counter-1)
      }
      function Reset(){
        setCounter(0)
      }
return(
    <div className='div'>
        <h1 style={{color:'aqua'}}>counter:{counter}</h1>
  <button onClick={()=>handleIncrement()}>
    +++
  </button>
  <button onClick={()=>handleDecrement()}>——</button>
   <button onClick={()=>Reset()}>reset</button>
    </div>

)
}
export default Counter

