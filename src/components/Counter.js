import { useState } from "react";
import '../App.css'

const Counter = () => {

    const [value, setValue] = useState(0);

    const handleAdd = () => {
        setValue(value+1)
    }


    const handleRestart = () => {
        setValue(0)
    }
 
    return (
        <div className="app-container">
            <h1 className="counter-heading">  Current Number: {value} </h1>
            <div className="button-container">
                <button 
                className="counter-button"
                onClick={handleAdd}
                >
                    Añadir 1
                </button>
                <button className="counter-button" onClick={() => setValue(value-1)}>Restar 1</button>
                <button className="counter-button" onClick={handleRestart}>Restart</button>
            </div>
        </div>
    )
}

export default Counter