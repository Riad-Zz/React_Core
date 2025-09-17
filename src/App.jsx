import { Suspense } from 'react';
import './App.css'
import Counting from './count';
import Player from './play';
import User from './user';
import Posts from './posts';

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const fetchPost = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts') ;
  return res.json() ;
}


function App() {


  function handleclickeMe() {
    alert("Button Clicked");
  }

  const handleClick3 = () => {
    alert("Button 3 Clicked ")
  }

  const handleParameter = (num) => {
    alert(num + 10);
  }

  const postPromise = fetchPost() ; 

  return (
    <>
      <h3>Vite + React</h3>
      {/*----------------- OnClick Handler--------------------------  */}
      {/* Onclick Handler  01 */}
      <button onClick={handleclickeMe}>Click me</button>
      {/* Onclick Handler  02 */}
      <button onClick={() => alert("Button 2 clicked")}>Click me 2</button>
      {/* Onclick Handler  03 */}
      <button onClick={handleClick3}>Click me 3</button>
      {/* Onclick Handler with Parameter handle */}
      <button onClick={() => handleParameter(5)}>Add me</button>
      <Counting></Counting>

      {/*----------------------- Use  State------------------------  */}
      <Player name={"Bro"}></Player>

      {/*--------------------- APi fetch using use-----------------------  */}

      {/* Use api hook (without Async) */}
      <Suspense fallback={<p>Loading...</p>}>
        <User fetchUser={fetchUser}></User>
      </Suspense>

      {/* Use api hook (with Async) */}
      <Suspense fallback= {<p>Friends are loading....</p>}>
        <Posts postPromise = {postPromise}></Posts>
      </Suspense>
    </>
  )
}

export default App
