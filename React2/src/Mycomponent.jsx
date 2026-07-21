import React, {useState} from "react";

function MyComp(){

    // const [name, setName] = useState("Unknown");
    // const [age, setAge] = useState(0);

    // const updateName = () => {
    //     setName("sanaya");
    // }

    // const increasedAge = () => {
    //     setAge(age+2 * 5);
    // }

    // return(
    //     <div>
    //         <p>Name: {name}</p>
    //         <button onClick={updateName}>Rename</button>

    //         <p>Age : {age}</p>
    //         <button onClick={increasedAge}>Increament Age</button>
    //     </div>
    // )

    //ONCHANGE

    const [name, setName] = useState("Dhokla");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleComment(event){
        setComment(event.target.value)
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return ( 
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleComment} placeholder="Enter instructions"/>
            <p>Comment : {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="masterCard">MasterCard</option>
                <option value="upi">UPI</option>
                <option value="credit card">Credit Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick up"
                       checked={shipping === "Pick up"}
                       onChange={handleShipping}/>
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={handleShipping}/>
                Delivery
            </label>
            <p>Shipping: {shipping} </p>
        </div>
    )
}

export default MyComp;