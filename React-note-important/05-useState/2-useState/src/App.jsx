// const [s, ss] = useState(0)
// const [state, setState] = useState(0)
// State Variable: state is a state variable initialized with the value 0.
// State Setter Function: setState is a function used to update the value of state.
// useState Hook: This is a React hook used to add state to functional components.


// Initially, count is 0.
// When the button is clicked, setCount is called with count + 1, updating the state.
// React re-renders the component, showing the updated count.


// You can replace state and setState with meaningful names to represent what the state is used for.
// const [s, ss] = useState(0)


import { useState } from 'react';
import './App.css'

function App() {



// Ekhane conlole log kora jabe na.. ekhane Wrong


//start
// You can replace state and setState with meaningful names to represent what the state is used for.
  const [state, setState] = useState(0)
  //Ei console ta   const [state, setState] = useState(0) ei line er age lekha jabe na. karon state declear korar age console state console e print kora jaina. so state declear korar por ei console ta kora jabe...
  console.log("nothing", state);//output: page reload hole nothing 0, tarpor every STATE CHANGE BUTTON click er por nothing 1, nothng 2, nothing 3 evabe increase hobe

  const handleState = () => {
    // const newState = state + 1
    // setState(newState)
    //OR
    setState(state + 1)// jsx e browser e, click er por output 1 2 3 evabe asbe. karon 0 initial e dewa ache

    console.log("state= ", state);//eta console e print hobe. console e 0 theke start hobe ar browser e 1 theke tai console e 1 kom kore print hobe all time ekhane// so output: state= 0, state= 1, state= 2, state= 3 .......
  }
//end




//start
  let plus = 10
  const [count, setCount] = useState(0)
  const handleCount = (plus) => {
    setCount(count + plus)// jsx e browser e click er por output 10 20 evabe asbe. karon 0 initial e dewa ache
    console.log("Count= ", count);// output: count= 0, count= 10, count= 20, county= 30...........
  }
//end





//start
//jsx er moddhe ak line e shortcut
const [roll, setRoll] = useState(0)
//end






//start
  let varA = 0;
  const handleVariable = () => {
    varA = varA + 1
    console.log("varA=", varA);
    // console output: varA= 0, varA= 1, varA= 2, varA= 3 ..........
    //but jsx er browser UI te sathe sathe update hoyna only console e upsate hoy sathe sathe. ejonno useState use kora hoy
  }
//end



//start
  // IMPORTANT:
  console.log("Hello Boss");
  //kono useState change hole tokhon eta console e print hobe. variable change e eta print hobe na. and page reload e eta change hobe
  // why?
  // karon useState change hole full component re-render hobe. so tokhon eta print hobe
//end




  return (
    <>
    {/* without pass any data */}
     <h2>This is State Count: {state}</h2>
     <button onClick={handleState}>State Change</button>



    <br/><br/>
    <span>-----------------------</span>
    <br/><br/>



    {/* with pass any data */}
    <h2>This is Count: {count}</h2>
    <button onClick={()=>handleCount(plus)}>Count Change</button>
    {/* (10) o pass kora jai variable e na rekeh */}



    <br/><br/>
    <span>-----------------------</span>
    <br/><br/>



    {/* ak line e shortcut */}
    <h2>This is State Count: {roll} </h2>
    <button onClick={() => setRoll(roll + 1)}>State Count</button>



    <br/><br/>
    <span>-----------------------</span>
    <br/><br/>



     <h2>This is Variable Count: {varA}</h2>
     <button onClick={handleVariable}>Variable Change</button>
     {/* console e update hobe but browser UI te sathe sathe update hoy na */}
     {/* ejonno useState use kora hoy */}


    </>
  )
}

export default App


// hello 
// world