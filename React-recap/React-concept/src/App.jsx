
import './App.css'
import { useState } from 'react';
import Display from './Display';

function App(){
  // let value = 1;
  const [value,setvalue] = useState([]);
  const [user,setUser] = useState(null);

 const handleClick = () =>{
   setvalue(value + 1);
 };



  return (
  <>
  
  <h1>hello</h1>

   {user && <Display></Display>}

  </>

  );

}

export default App;
