
import './App.css'
import Singer from './Singer'

function App() {

  const singers = [
    {name:'Dr.Mahfuzur',age:68},//0
    {name:'Eva Rahman',age:38},//1
    {name:'Shovro dev',age:58},//2
    {name:'Emon Ahmed',age:48},//3
    // { id: 1, name: 'physics', price: 100 },
    // { id: 2, name: 'chemisty', price: 120 },
    // { id: 3, name: 'Biology', price: 130 },
    // { id: 4, name: 'Higher Math', price: 140 },
  ]



  const abc = "nahian"
  const xyx = "wasifa"


  return (
    <>

      {/* comment */}
      {/* <Singer abc="Singer wasifa"></Singer> */}
      {/* <Singer abc={abc} xyx={xyx} ></Singer> */}


      {
        // comment
        //singers.map(() => <Singer></Singer>)

        //singers.map(singer => <Singer singer={singer}></Singer>)
        //singers.map(abcd => <Singer singer={abcd}></Singer>)
        


        //singers.map((abcd,idxx) => <Singer key={idxx} singerrrr={abcd}></Singer>)
        //prop receive const Singer = ({singerrrr}) => {

        //singers.map(abcd => <Singer key={singers.id} singerrr={abcd}></Singer>)


                                                          //prop={singer}
                                                          //hidarling={singer}
        singers.map((singer,index) => <Singer key={index} singer={singer} iddd={index}></Singer>)
        //singer 0 singer 1 singer 2 signer 3

      }


{/* 

iddd-> object iddd

 */}


    </>
  )
}

export default App
