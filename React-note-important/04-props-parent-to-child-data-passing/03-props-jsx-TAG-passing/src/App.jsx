
import './App.css'
import Service from './Service'

function App() {

  const num1 = 10;
  const arr = [1,2,3,4,5];
 
  return (
    <>
      
      <Service
       num1={num1} 
       arr={arr}
       headerrr={<h2>This is passed via a custom prop</h2>}
       >
        <h2>Children h2</h2>
        <h3>Children h3</h3>
        <p>Children p</p>
      </Service>
       
    </>
  )
}

export default App

//UI oupput:::::
// Children h2
// Children h3
// Children p
// This is passed via a custom prop
