
import './App.css'


function AlertButton({message, children}){
  return(
    // <button onClick={() => {alert(message)} }> // multipel line hole {} use korte hobe
    <button onClick={() => alert(message)}>
      {children}
      {/* Play Modie and Upload Image text as a children hisebe asbe.. */}
    </button>
  )
}

function App() {
  
  return (
    <>
      
      {/* Play Movie and Upload Image holo children */}
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>


      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>

      
      
    </>
  )
}

export default App
