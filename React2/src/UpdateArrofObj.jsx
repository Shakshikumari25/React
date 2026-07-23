import React, {useState} from "react";

function Comp(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function addCar(){
        const newCar = {year : carYear,
                        make : carMake,
                        model : carModel
        }

        setCars(c => [...c,newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function removeCar(index){
        setCars(cars.filter((_,i) =>i !== index))
    }

    function changeYear(event){
        setCarYear(event.target.value);
    }

    function changeMake(event){
        setCarMake(event.target.value);
    }

    function changeModel(event){
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Cars Objects</h2>
            <ul>
                {cars.map((car, index) =>
                   <li key={index} onClick={() => removeCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>

            <input type="number" value={carYear}
             onChange={changeYear} /> <br/>
            <input type="text" value={carMake}
             onChange={changeMake} placeholder="Enter Car Make"/> <br/>
            <input type="text" value={carModel} 
             onChange={changeModel} placeholder="Enter Car Model"/><br/>

            <button onClick={addCar}>Add Car</button> 
        </div>
    )
}

export default Comp;