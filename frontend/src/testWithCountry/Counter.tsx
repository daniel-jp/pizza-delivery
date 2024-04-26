import React, { useState } from 'react'



export default function Counter() {
const [counnter, setCounter]=useState(0);

const HenderIncrease =()=>{
setCounter(counnter+1);
}

const HenderDecrease =()=>{

    setCounter(counnter -1);

}
  return (
    <div>
        <button onClick={HenderIncrease}>Increaser</button>
        <button onClick={HenderDecrease}>Decresear</button>

        <h1> Counter {counnter}</h1>


    </div>
  )
}
