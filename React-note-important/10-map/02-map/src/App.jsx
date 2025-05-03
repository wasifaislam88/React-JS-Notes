
import Actors from './Actors'
import './App.css'
import Singers from './Singers'

function App() {
  const actors = ['Robert Downey Jr' , 'Chris Evans', 'Scarlett Johansson', 'Elizabeth Olsen']

  const  singers= [
    {id: 1, name: 'Arijit Singh', age: 40},
    {id: 2, name: 'Shreya Ghoshal', age: 30},
    {id: 3, name: 'Jayalaxmi', age: 20}
      
  ]

  return (
    <>
      
      

      {
      actors.map(actorrr => <Actors name={actorrr} ></Actors>)
      }
      {/* <Singers singers={singers} /> */}
      {
        singers.map(singer => <Singers singer={singer} key={singer.id}></Singers>)
      }

        
    </>
  )
}

export default App
