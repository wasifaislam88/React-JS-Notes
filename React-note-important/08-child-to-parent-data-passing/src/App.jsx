
import { useState} from 'react';
import './App.css'
import Service from './Service';

function App() {
  
  // NOTE: must check browser console

  const [status, setStatus] = useState(0)
  console.log('A',status);


  

  const transfer = (message) => {
    // console.log('B',message+1);
    console.log('B',message);
    setStatus(prv=>prv+message)
    
  }




  return (
    <>
    <h>{status}</h>
      
      <Service transferProps={transfer} />


    </>
  )
}

export default App
