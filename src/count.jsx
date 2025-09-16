import { useState } from "react"

export default function Counting (){

   const countStyle = {
    border : '1px solid green' ,
    padding : '2px' , 
    borderRadius : '9px' ,
   }
   //------------Use of State----------------------
   const [count ,setCount] = useState(0)

   const handleClick = () => { 
    const newCount = count + 1 ;
    setCount(newCount) ;
   }

  return (
    <div style={countStyle}>
        <p >Count : {count} </p>
        <button onClick={handleClick} style={{marginBottom : '10px'}}>Click</button>
    </div>
  )  
}