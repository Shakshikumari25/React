import React, {useState} from "react";

function MyComp(){

    const [name, setName] = useState("Unknown");
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName("sanaya");
    }

    const increasedAge = () => {
        setAge(age+2 * 5);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Rename</button>

            <p>Age : {age}</p>
            <button onClick={increasedAge}>Increament Age</button>
        </div>
    )
}

export default MyComp;