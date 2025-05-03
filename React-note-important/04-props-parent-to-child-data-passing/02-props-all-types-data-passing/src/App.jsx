
import './App.css'
import Display1 from './Display1'
// import Display2 from '../../../Display22'
// import Second from './Second'


function App() {

  const dataObject = {
    name: "John",
    age: 100,
    skill: "React",
  }

  const dataStringVariable = "Hello World"

  const dataArr = [1, 2, "three", "four", 5, 6]

  const dataNumVariable = 100

  const isTrue = true


  return (
    <>
      <Display1
        dataObject={dataObject}
        dataStringVariable={dataStringVariable}
        dataString="Hello World"
        dataArrVariable={dataArr}
        dataArr={[10, 20, 30]}
        dataNumVariable={dataNumVariable}
        dataNum={200}
        isTrue={isTrue} />

    

    </>
  )
}

export default App
