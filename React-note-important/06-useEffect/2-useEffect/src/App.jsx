
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [state, setState] = useState(0)
  const handleState = () => {
    setState(state + 1)
  }

  const [roll, setRoll] = useState(0)
  const [salary, setSalary] = useState(0)


// useEffect is react hook

  // state and salary er upor dependency rekheci
  // roll er upor dependency rakhini
  // page reload and state and salary update hole render hobe tokhon console e print hobe, but roll er upor dependency na rakhaTe roll update hole je render hobe tokhon console e print hobe na karon roll er upor dependency nai render holeo...
  // ak kothay update e render hoy so render hole onek kichu print/update hoy, but konta update e render hole konta nize theke update hobe na ba hobe eta decide korar jonne useEffect use korte hobe



  // useEffect(()=>console.log("hello from useEffect"))
  //⬇️
  // useEffect(()=>{console.log("hello from useEffect")})
  //⬇️
  // useEffect(()=>{
  //   console.log("hello from useEffect")
  // })
  //⬇️
  // useEffect(()=>{
  //   console.log("hello from useEffect from useEffect")
  // },[]) //You use an empty dependency array when the effect does not depend on any variables and should only run once.
  //⬇️
  useEffect(()=>{
    console.log("hello from useEffect")
  },[state,salary])//state and salary change hole console e print hobe,but roll update hole console e print hobe na
  // useEffect(()=>{...},[a,b])
  
//NOTE: this code focus only console log 





  return (
    <>
     
     <h2>This is State Count: {state} </h2>
     <button onClick={handleState}>State Count</button>
     <br/><br/><span>-----------------------</span><br/><br/>
     <h2>Roll Count: {roll}</h2>
     <button onClick={() => setRoll(roll + 1)}>Roll Count</button>
     <br/><br/><span>-----------------------</span><br/><br/>
     <h2>Salary Count: {salary}</h2>
     <button onClick={() => setSalary(salary + 1)}>Salary Count</button>




    </>
  )
}

export default App
