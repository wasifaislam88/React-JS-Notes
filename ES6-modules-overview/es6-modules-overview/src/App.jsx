import { useEffect, useState } from 'react';
import './App.css';
import Watch from './components/Watch/Watch';



function App() {
  const [watches, setWatches] = useState([]);

  useEffect(()=>{
    fetch('Watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, []);


  // const watches = [
  //   {id: 1, name: 'Apple', price: 20000},
  //   {id: 2, name: 'Xian Xi', price: 4000},
  //   {id: 3, name: 'Vivo', price: 2500},
  //   {id: 4, name: 'MI', price: 8000},
  // ]


  return (
    <>
      <h1>Watches And Sunglasses</h1>
      {
        watches.map(watch => <Watch watch={watch}></Watch>)
      }
      
    </>
  )
}

export default App
