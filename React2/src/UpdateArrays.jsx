import React,{useState} from "react";

function UpdateArr(){

    const [food, setFood] = useState(["pizza", "apple", "orange"]);

    function addEl(event){

        const newFood = document.getElementById("foodInput").value ;
        document.getElementById("foodInput").value = "";
        setFood(f => [...f, newFood]);
    }

    function removeEl(index){
        setFood(food.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((food,index) =>
                     <li key={index} onClick={() => removeEl(index)}>
                        {food}
                     </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name"/>
            <button onClick={addEl}>Add Food</button>
        </div>
    )

}

export default UpdateArr;