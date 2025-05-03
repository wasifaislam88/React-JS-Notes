import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = 
  const [nahian, setNahian] = useState(0)

  return (
    <>



        <button className='px-5 py-3' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <button onClick={() => setNahian((nahian) => nahian - 1)}>
          count is {nahian}
        </button>



    </>
  )
}

export default App
