import { useEffect,useState } from 'react'
import './App.css'
import Products from './componant/Products/Products/'
import Service from './componant/service/Service';

function App() {
//  const [state,setState] = useState(0);
//  const [state1,setState1] = useState(0);

// useEffect(() => {
//   console.log("hello from useEffect")
// },[state])


//  let storageVar = 0;

//  const handlevariableCount = () =>{
//   storageVar=storageVar+1
//  }

//  const handleState = () =>{
//   setState(state + 1)
//  }

console.log("hello boss");


//  const handleHeroAlom = (massage) =>{
//   console.log("massage")
//  }

const [status,setStatus] = useState(true);
//  console.log(!status)

console.log(status)

//  const handleStatus = () =>{
//  setStatus(!status)
//  }


const transfer = (message) => {
  setStatus(message)
}



  return (
    <>

  <div>
    {/* <h1>This is State count {state}</h1> */}
    {/* <h1>This is Variable Count {storageVar}</h1> */}
  </div>
{/* <button onClick={handleStatus}>Handle Status</button> */}
    {/* <button onClick={handleState}>This is state Count</button>
    <button onClick={handlevariableCount}>This is variable Count</button> */}
     <br />


     {/* <button onClick={()=>handleHeroAlom('oky boss')} className='hero'>Just for hero alom</button> */}
   
      {/* { 
        status?<Products></Products>:<Service></Service>
      } */}

      <Service transfer={transfer}></Service>
    
      
   
      
    </>
  )
}

export default App
