
import { useState } from 'react'
import './App.css'
import Racipies from './component/Racipies'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Banner from './component/Banner'

function App() {
  const [recipiesidebar, setRecipiessidebar] = useState([])
  const [preparedrecipe, setpreparedrecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, settotalCalories] = useState(0)

  const handleRemove = (id) => {
    //find which recipe are remove
    const deletedrecipe = recipiesidebar.find((recipe) => recipe.recipe_id === id)
    // remove form want to cook table
    const updatedqueue = recipiesidebar.filter(recipe => recipe.recipe_id !== id)
    setRecipiessidebar(updatedqueue)
    setpreparedrecipe([...preparedrecipe, deletedrecipe])
  }

  const showrecipies = recipie => {
    const isExit = recipiesidebar.find(priviousrecipe => priviousrecipe.recipe_id === recipie.recipe_id)
    if (!isExit) {
      setRecipiessidebar([...recipiesidebar, recipie])
    }
    else {
      alert("recipie is added")
    }

  }

  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    settotalCalories(totalCalories + calories)


  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className='md:flex gap-4 mt-12'>
        <Racipies showrecipies={showrecipies}></Racipies>
        <Sidebar handleRemove={handleRemove} calculateTimeAndCalories={calculateTimeAndCalories} preparedrecipe={preparedrecipe} recipiesidebar={recipiesidebar} totalTime={totalTime} totalCalories={totalCalories}></Sidebar>
      </div>
    </>
  )
}

export default App