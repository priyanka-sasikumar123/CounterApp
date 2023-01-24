import React from 'react'
import { useState } from 'react';
function Counterfun() {
    //create a state
  const[counter,setCounter] = useState(0)

  function IncrementCounter(){
    {
      setCounter(counter+1)
    }
  }
  function DecrementCounter(){
    if(counter!=0)
    setCounter(counter-1)
  }
  function Reset(){
    setCounter(0)
  }
  return (
    <div>
        <div className='card text-center my-5'  style={{
          backgroundColor:'rgb(33,37,41)',
          margin:'200px'
        }}>
        <div className='card-body my-5' >
          <div className='yourturn'>
          <h1 style={{
            color:'white'
          }}>YOUR TURN
            </h1></div>
          <div className='my-5'>
            <h2 style={{
            color:'white'
          }} className='my-5'>{counter}</h2>
            <button className='btn btn-success mx-3'  onClick={IncrementCounter}>Increment</button>
            <button className='btn btn-danger mx-3'  onClick={DecrementCounter}>Decrement</button>
            <button className='btn btn-secondary mx-3' onClick={Reset}>Reset</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Counterfun