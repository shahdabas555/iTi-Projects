import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { lifeRing } from 'fontawesome';

export default function Home() {
  let [counter, setCounter] = useState(0);
  let [nums, setNums] = useState([1, 2, 3, 4, 5]);
  let newNums = nums.map((num) => num + 10);

  function increase(parem) {
    setCounter(counter + parem);
  }

  return (
    <>
    <Navbar />
    <h1>Counter: {counter}</h1>
    <button className='btn btn-primary' onClick={function(){increase(10)}}>Increase Counter</button>

    <div className= {counter > 20 ? 'bg-info d-block' : 'd-none'}>
      <h2>Counter: {counter}</h2>
    </div>

    <div>
      <ul>
        {newNums.map((num) => <li className='bg-info'>{num}</li>)}
      </ul>
    </div>
    </>
    )
}