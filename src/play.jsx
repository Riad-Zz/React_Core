import { useState } from "react"

export default function Player ({name}){

    const playerStyle = {
        border : '1px solid green',
        padding : '10px',
        marginTop : '20px',
        borderRadius : '9px'
    }
    const buttonStyle = {
        marginRight : '4px' ,
    }

    const [runs,setRuns] = useState(0) ;

    // State Handle 
    const handleSingle = ()=>{
        const newRun = runs + 1 ;
        setRuns(newRun) ;
    }
    return ( 
        <div style={playerStyle}>
            <p>Player Name : {name}</p>
            <p>Score : {runs}</p> 
            <button style={buttonStyle} onClick={handleSingle}>Single</button>
            <button style={buttonStyle} onClick={()=>setRuns(runs+2)}>Double</button>
            <button style={buttonStyle} onClick={() => setRuns(runs + 4)}>Four</button>
            <button style={buttonStyle} onClick={()=>setRuns(runs+6)}>Six</button>
        </div>
    )
}