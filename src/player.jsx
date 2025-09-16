import { useState } from 'react'
import './App.css'

export default function Player ({name}){
    const buttonMargin = {
        marginRight : '5px' ,
    }

    const [runs,setRuns] = useState(0) ;
    //------------Handle Single----------------
    const handleSingle = () =>{
        const newRun = runs + 1 ;
        setRuns(newRun) ;
    }

    //--------------Double Handle-----------------
    const handleDouble = () =>{
        const newRun = runs + 2 ;
        setRuns(newRun)
    }

    //---------------Four Handle--------------------
    const HandleFour = () =>{
        setRuns(runs+4) ;
    }

    //----------------Six Handle -------------------
    const handleSix = () =>{
        setRuns(runs + 6) ;
    }
    
    return (
        
        <div className='playerStyle'>
            <p>Player Name : {name}</p>
            <p>Runs : {runs}</p>
            <button onClick={handleSingle} style={buttonMargin}>Single</button>
            <button onClick={handleDouble} style={buttonMargin}>Double</button>
            <button onClick={handleSix} style={buttonMargin}>Six</button>
            <button onClick={HandleFour} style={buttonMargin}>Four</button>
        </div>
    )
}