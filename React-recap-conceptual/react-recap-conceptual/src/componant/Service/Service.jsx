import React from 'react'
 export default function Service (transfer) {

  return (
    <div>
    <h1> this is Service</h1>
    <button onClick={()=>transfer("data service delam")}>Click from service</button>
    </div>
  )
}

