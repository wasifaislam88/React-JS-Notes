
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import ToggleSection from './Components/ToggleSection'
import { toast } from 'react-toastify';

function App() {

  const [coin, setCoin] = useState(0)

  const [selectedPlayer, setSelectedPlayer] = useState([])


  const handleGetCoin = () => {
    setCoin(coin + 100)


    toast.success('successfully added 100 coin', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }



  // player selectation validation

  const handleSelect = (player) => {
    // console.log("clicked")
    // console.log(player)

    // player selectation validation
    // const newSelect = selectedPlayer.filter(p => p.playerId !== sPlayer.playerId)
    // when page relaod selectedPlayer []  has no data. so it cant find anything 
    // if find() not find anything then it return undefine
    // // undefine is falsy falsy value means it retun "FALSE"
    const aleradySelected = selectedPlayer.find(p => p.playerId === player.playerId)
    if (aleradySelected) {
      // toast
      toast.error('This Player Already Exist', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return
    }

    setSelectedPlayer([...selectedPlayer, player])
    // toast
    toast.success('Successfully Player added', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
   
      });
    


    // console.log(selectedPlayer.length)
  }







  const handleDelete = (sPlayer) => {
    const newSelect = selectedPlayer.filter(p => p.playerId !== sPlayer.playerId)
    // newSelect holo akta array
    setSelectedPlayer(newSelect)

    toast(`${sPlayer.name} successfully deleted`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",

    });

  }

  return (
    <>

      <NavBar coin={coin}></NavBar>
      <Banner handleGetCoin={handleGetCoin}></Banner>
      <ToggleSection handleSelect={handleSelect} selectedPlayer={selectedPlayer} handleDelete={handleDelete} coin={coin} setCoin={setCoin}></ToggleSection>
      <Footer></Footer>
    </>
  )
}

export default App
