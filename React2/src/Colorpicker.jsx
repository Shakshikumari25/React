import React, {useState} from "react"

function ColorPicker(){

    const[color, setColor] = useState("#ffffff")

    function pickColor(event){
        setColor(event.target.value);
    }

    return(
        <div className="colorPicker">
           <h1>Color Picker</h1>
           <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
           </div>
           <label>Select a Color</label>
           <input type="color" value={color} onChange={pickColor} />
        </div>
    )
}

export default ColorPicker