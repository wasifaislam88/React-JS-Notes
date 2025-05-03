
import './App.css'

function App() {
  


  const handleHeroAlom = () => {
    console.log("Hero Alom");
  }
  const handleAshrafulAlom = (msg) => {
    console.log(msg);
  }

  const handlePerfectAlom = (msg) =>{
    console.log(msg);
  }



  return (
    <>


    {/* NOTE: jodi function call er somoy data pathate chai tahole must arrow function use korte hobe */}
    {/* NOTE: ekhane data pathaini tai arrow function use kora hoyni */}
    <span>right</span><button onClick={handleHeroAlom}>Just For Hero Alom</button>
    {/* every single click korle consile a output: Hero Alom. function er moddhe Hero alom dewa ache */}
    {/* Correct way */}


    <br/><br/>
    {/* NOTE: correct way */}
    <span>right</span><button onClick={()=>handlePerfectAlom("Just For Perfect Alom")}>Just For Perfect Alom</button>
    {/*every single click korle console a output: Just For Perfect Alom */}
    {/* Correct way */}


    <br/><br/>
    {/* NOTE: arrow function use na korate page reload holei click er kaz korbe and data pass korini tai undefined print hobe */}
    <span>wrong</span><button onClick={handleAshrafulAlom()} >Just For Ashraful Alom</button>
    {/*click na kore page reload hole console output: undefined  */}
    {/* avoid this */}


    <br/><br/>
    {/* NOTE: arrow function use kora hoyni so page reload holei print hobe. */}
    <span>wrong</span><button onClick={handleAshrafulAlom("Just For Ashraful Alom")} >Just For Ashraful Alom</button>
    {/*click na kore page reload hole console output: Just For Ashraful Alom */}
    {/* avoid this */}





      
    </>
  )
}

export default App
