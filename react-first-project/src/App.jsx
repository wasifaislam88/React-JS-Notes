import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BookStore from './Bookstore'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const actors = ['Sakib','Shoriful Raj','jasim','Rubel'];

const books = [
  {id:1,name:'physics',price:100},
  {id:2,name:'chemisty',price:120},
  {id:3,name:'Biology',price:130},
  {id:4,name:'Higher Math',price:140},
]


  const singers = [
    {id:1, name:'Dr.Mahfuzur',age:68},
    {id:2, name:'Eva Rahman',age:38},
    {id:3, name:'Shovro dev',age:58},
    {id:4,name:'Emon Ahmed',age:48},
  ]
  return (
    <>
      <h3>Vite + React</h3>

    <BookStore books={books}></BookStore>




    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }

    <Actor name={"Bappa Raz"}></Actor>
    {
      actors.map(actor =><Actor name={actor}></Actor>)
    }



      {/* <Todo
        task="Learn React"
        isDone={true}></Todo>

      <Todo
        task="Explore Core concepts"
        isDone={false}></Todo>

      <Todo
        task="Try JSX"
        isDone={true}></Todo> */}



      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score ="99"></Student>
      <Student grade={12} score ="79"></Student>
      <Student></Student>
      <Developer></Developer>
       */}
    </>
  )
}

function Device(props) {
  // console.log(props)
  return <h2>This device:{props.name} price:{props.price}</h2>
}




function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 }
  return <h3>I am a {person.name} with age:{age + money}</h3>

}

const { grade, score } = { grade: '7', score: '99' };

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return <div className='student'>
    <h3>This is a student</h3>
    <p>Class:{grade}</p>
    <p>score:{score}</p>

  </div>
}

function Developer() {

  const DeveloperStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (

    <div style={DeveloperStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
