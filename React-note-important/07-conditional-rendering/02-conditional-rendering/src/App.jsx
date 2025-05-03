import { useState } from 'react'

import './App.css'
import Child1 from './Child1'
import Child2 from './Child2'

function App() {
  const [status, setStatus] = useState(true)

  const handleStatur = () => {
    setStatus(!status)
  }

  console.log(status);//page reload e true, then very button click e false, true, false evabe change hobe
  

  return (
    <>
      
      <button onClick={handleStatur}>Status</button>

      <br/><span>***************************</span><br/><br/>




      {/* status true hole online show korbe ar true na hole offline show korbe */}
      {
        status ? <h2>Online</h2> : <h2>Offline</h2>
      }

      {
        status ? <Child1 /> : <Child2 />
      }



<br/><span>----------</span><br/><br/>


      {/* NOTE: fregment er poriborte div use kora jai jodi 2 ta kaz aksate show korate hoy */}
      {/* NOTE: fregment er poriborte div use kora jai. but <></> fragment is recommanded for ignore other complexity */}
      {/* NOTE: condition {} curly bracket er moddhe jsx comment jse kkora jaina. tahole error asbe. ctrl+/ click e jsx comment hoye jai but ei jsx comment conditional {} er moddhe use kora jaina. chaile ei conditional {} curly bracket er moddhe javascript comment  // fouble forward slash use kora jabe */}

      {
        status ? (
          //<div> but <></> fragment is recommanded for ignore other complexity
          <>
            <h2>Online</h2>
            <Child1 />
          </>
          //</div>
        ) : (
          //<div>
          <>
            <h2>Offline</h2>
            <Child2 />
          </>
          //</div>
        )
      }





      <br/><span>----------</span><br/><br/>




      {
        status ? (
          <>
            <h2>Online</h2>
            <Child1 />
          </>
        ) : (
          <>
            <h2>Offline</h2>
            <Child2 />
          </>
        )
      }




      <br/><span>----------</span><br/><br/>



      {
        status && <Child1/> || <Child2/>
      }









    </>
  )
}

export default App
