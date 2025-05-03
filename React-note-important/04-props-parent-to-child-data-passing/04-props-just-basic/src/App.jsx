// NOTE: App.jsx-> Products-> Product-> Pro-> P
import './App.css';
import Products from './components/Products'

export default function App() {

  const information = {
    message: "secret",
    phone: "017123456"

  }
//roll->roll, roll2->serial2 
  const roll = 88
  const roll2= 99

  return (
    <>
    <h1>App.JSX Page</h1>
      <Products info={information} roll={roll} serial2={roll2} />

    </>
  )
}

// NOTE: App.jsx-> Products-> Product-> Pro-> P


//NOTE: rafce -> App.jsx er code clear kore ei command
// NOTE:or rfc
