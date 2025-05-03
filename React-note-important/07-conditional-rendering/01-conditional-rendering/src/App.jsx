
import './App.css'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'


function App() {

  const isDone = false

  return (
    <>
    <span>------------------task1 page-----ternary operator------------</span>
     <Task1 isDone={isDone} task="React" />

     <br/><br/><br/><span>------------------task2 page------if else-----------</span><br/>
     <Task2 isDone={isDone} task="NodeJS" />

     <br/><br/><br/><span>------------------task2 page------ using && || -----------</span><br/>
     {/* && true hole print */}
     {/* || false hole print */}
     <Task3 isDone={isDone} task="MongoDB" />
    </>
  )
}

export default App
