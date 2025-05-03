
import './App.css'
import Hello from './Hello'

function App() {

  const name = 'John'
  const age = 100
  const isMarried = true
  const friends = ['Tom', 'Bob', 'Alice']
  const address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }

  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  

  return (
    <>
      <Hello name={name} age={age} isMarried={isMarried} friends={friends} address={address} handleClick={handleClick}></Hello>
    </>
  )
}

export default App
