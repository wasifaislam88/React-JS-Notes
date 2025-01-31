
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

function handleClick(){
  alert('button clicked');
}
const handleClick2 = () =>{
  alert('button 2 clicked')
}
const addToFive = (num) =>{
  alert(num + 5);
}

  return (
    <>
      <h3>React Core Concepts 2</h3>
     <Friends></Friends>

      <Users></Users>

      <Team></Team>

     <Counter></Counter>
      
       {/* NORMAL HTML,C small latter hoi,but reat a  C CAPITAL latter hoi html a function k call kore hoi but reat a {} delei hoi*/}
      {/* <button onclick=handleClick()>Click me</button> */} 


      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={()=>{alert('third clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App


