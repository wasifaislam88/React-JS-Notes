// NOTE:
// Where to use curly braces ??????
// -> You can only use curly braces in two ways inside JSX:

// (1) As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
// (2) As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".



import './App.css'

function App() {



//EXAMPLE 0
  const text = "Hello World"
  const styles = {
    color: "green",
  }






// Example: 1
  const person = {
    name: "Joe",
    address: "Mars",
    theme: {
      backgroundColor: "black",
      color: 'yellow',
      fontSize:"40px"
    }
  }




// Example: 2
  const info = {
    name: "John",
    address: "Earth",
    backgroundColor: "green",
    fontSize:"35px",
    border: "1px solid red"
  }



  return (
    <>



    {/* Example: 0 */}
    <h1 style={styles}>{text}</h1>



{/* Example:1 */}
    <div style={person.theme}>
      <p>Name: {person.name}</p>
      <p>Address: {person.address}</p>
    </div>




{/* Example: 2 */}
      <div style={{
        border: info.border
      }}>

      <p style={{
        backgroundColor: info.backgroundColor,
        fontSize: info.fontSize
        }}
        >Name: {info.name}</p>

      <p>Address: {info.address}</p>
      </div>


    </>
  )
}

export default App

