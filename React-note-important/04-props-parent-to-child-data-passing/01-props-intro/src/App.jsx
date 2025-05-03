
import './App.css'


//Without Distructuring  Start ************ profile 1 *********************************
function Profile1(props) {
  // console.log(props);// output: {hero: 'Something', alam: 'Nothing', number: 10} (as a object)

  console.log(typeof props);//output: object

   
  return (
    <div>
      <h1>{props.hero}</h1> {/* // UI output: Something */}
      <h1>{props.alam}</h1> {/* // UI output: Nothing */}
      <h1>{props.number}</h1> {/* // UI output: 10 */}
    </div>
  )
}
// END *********************************************************************



// With Distructuring Start **************** Profile 2 *****************************
// function Profile2({hero, alam, number})
// OR
function Profile2(propsSSS) {

  // const {hero} = propsSSS
  // const {alam} = propsSSS
  // const {number} = propsSSS
  // OR
  const {hero, alam, number} = propsSSS

  console.log(hero);//output: Something ( as a string)
  console.log(typeof hero);//output: string

  console.log(propsSSS);//output: {hero: 'Something', alam: 'Nothing', number: 10} (as a object)
  console.log(typeof propsSSS);//output: object

  

  return (
    <div>
      <h1>{hero}</h1> {/* // UI output: Something */}
      <h1>{alam}</h1> {/* // UI output: Nothing */}
      <h1>{number}</h1> {/* // UI output: 10 */}
    </div>
  )
}
// END *********************************************************************


// Object Pass Start **************** Object Pass *****************************
function ObjectPass({info}) {

    // jodi again double distructure na kori tahole dot notation use kore access korte hobe. 
    // console.log(info.name, info.address, info.contact);
    // OR

  // again distructure
  const {name, address, contact} = info // double distructure
  console.log(name, address, contact);//output: John Earth 0123456789


  return (
    <div>

      {/* again double distructur na korle evabe not notation use kore access korte hobe */}
      {/* <h1>{info.name}</h1>  */}
      {/* <h1>{info.address}</h1>  */}
      {/* <h1>{info.contact}</h1>  */}
      {/* OR */}

      <h1>{name}</h1> {/* // UI output: John */}
      <h1>{address}</h1> {/* // UI output: Earth */}
      <h1>{contact}</h1> {/* // UI output: 0123456789 */}

    </div>
  )
}
// END *********************************************************************



 
       
 
function App() {
  const nothinggg = "Nothing"
  const people = {
    name: "John",
    address: "Earth",
    contact: "0123456789"
  }

  return (
    <>
    {/* "" quotation use kor static data and {} use kore dynamic data pass korechi */}
    {/* Profile1 without Distructuring and Profile2 with Distructuring */}
     <Profile1 hero="Something" alam={nothinggg} number={10} ></Profile1>
     <br/><span>----------------------------------------------</span><br/>
     <Profile2 hero="Something" alam={nothinggg} number={10}></Profile2>

     <br/><span>----------------------------------------------</span><br/>
    <ObjectPass info={people}></ObjectPass>

    </>
  )
}
export default App
