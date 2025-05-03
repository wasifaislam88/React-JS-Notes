
import './App.css'


function App() {

  // The cssCss Object
// The cssCss object defines a set of inline CSS styles as JavaScript key-value pairs. The keys are camelCased versions of CSS property names, and the values are the CSS values.
  const cssCss = {
    backgroundColor: 'green',
    color : 'pink',
    fontSize: '20px',
    fontStyle: 'italic'
  }


  return (
    <>
      {/*  Inline Styles -> Styles are defined directly within the component using a style attribute, which takes an object with camelCase property names. Exmple: fontSize, backgroundColor */}
      <h1 style={{backgroundColor: 'skyblue', color : 'pink', fontSize: '30px', fontStyle: 'italic'}}>Hello World</h1>
      <h2 style={
        {
          backgroundColor: 'yellow',
          color : 'pink',
          fontSize: '20px',
          fontStyle: 'italic'
          }
          }>Hello World</h2>


      <br/><br/>

      {/* style={cssCss}: The style attribute is used to apply the inline styles defined in the cssCss object. React automatically converts the object into proper inline styles for rendering in the browser. */}
      <h3 style={cssCss} >Hello World</h3>

      <br/><br/>

      {/* CSS Stylesheets -> Create a regular .css file and import it into your component or App. */}
      <h4 className="externalCSS">External Css from App.css</h4>

      <br/><br/>
      
      {/* Tailwind CSS -> Use utility-first classes from Tailwind CSS for styling directly in the className attribute */}
      <h5 className="bg-emerald-700 text-4xl rounded-full">Tailwind CSS</h5>


      
    </>
  )
}

export default App
