import { useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Newsletter from './components/Newsletter/Newsletter'




function App() {
  
  // hero section claim button functionality
  const [coins, setCoins] = useState(0);

  // toast alert for adding free coin
  const handleAddCoins = () => {
    setCoins(pervCoins => pervCoins + 60000000);
    toast.success("Free Credit 60000000 Added to your Account!",{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  }

  // available players buttons functionality
  const [btnActive, setBtnActive] = useState({
    available: true,
    status: "available"
  })
  
  const handleBtnActiveState = (status) => {
    if(status === "available"){
      setBtnActive({
        available: true,
        status: "available"
      })
    }
    else{
      setBtnActive({
        available: false,
        status: "selected"
      })
    }
  }
  
  return (
    <div className='sora-normal'>
      <div>
        <ToastContainer></ToastContainer>

        {/* navbar section */}
        <Navbar coins={coins} ></Navbar>
      </div>

      {/* hero section */}
      <Hero onClaimFreeCredit={handleAddCoins} ></Hero>

      {/* main section */}
      <AvailablePlayers 
        btnActive={btnActive} 
        handleBtnActiveState={handleBtnActiveState}
        setCoins={setCoins}
        coins = {coins}
      ></AvailablePlayers>

      <Newsletter></Newsletter>

      {/* footer section */}
      <Footer></Footer>
         
    </div>
  )
}

export default App
