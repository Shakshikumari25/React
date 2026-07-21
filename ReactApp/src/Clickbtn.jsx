

function ClickButton(){

    // const handleClick = () => console.log("HELLOOW");

    // const handleClick2 = (name) => console.log(`${name} stop clicking`)

    // // return(<button onClick={handleClick}>Click Me!!</button>)
    // return(<button onClick={() => handleClick2("Kriti")}>Click Me!!</button>)

    // let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked this ${count} times`);
    //     }else{
    //         console.log(`${name}, you reached your limit`);
    //     }
    // }

    // return(<button onClick={() => handleClick("Harshit")}>Click Here😁</button>)

    //EVENTS
    const handleClick = (e) => e.target.textContent = "OOUCH 😶‍🌫️";

    return(<button onDoubleClick={(e) => handleClick(e)}>Click Here😁</button>)
}

export default ClickButton