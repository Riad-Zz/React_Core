import './App.css'
import Counting from './count';
import Player from './player';

function App() {


  function handleclickeMe(){
      alert("Button Clicked") ;
    }
  
  const handleClick3 = () => {
    alert("Button 3 Clicked ")
  } 

  const handleParameter =  (num) =>{
    alert(num+10) ;
  }

  return (
    <>
      <h3>Vite + React</h3>
      {/* Onclick Handler  01 */}
      <button onClick={handleclickeMe}>Click me</button>
      {/* Onclick Handler  02 */} 
      <button onClick={()=>alert("Button 2 clicked")}>Click me 2</button>
      {/* Onclick Handler  03 */} 
      <button onClick={handleClick3}>Click me 3</button>
      {/* Onclick Handler with Parameter handle */}
      <button onClick={()=>handleParameter(5)}>Add me</button> 
      <Counting></Counting>
      <Player name={"Rahim"}></Player>
    </>
  )
}

export default App
