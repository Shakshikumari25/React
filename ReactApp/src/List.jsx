
function List(){
    const fruits = [{name:"apple", calories: 95},
                    {name:"mango", calories: 45}, 
                    {name: "blueBerry", calories: 55}, 
                    {name: "coconut", calories: 160}, 
                    {name:"orange", calories:99}
                ];

    fruits.sort((a,b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    // fruits.sort((a,b) => a.calories - b.calories);  
    
    const lowCaloFruit = fruits.filter(fruit => fruit.calories < 100);
    const highCaloFruit = fruits.filter(fruit => fruit.calories > 100);

    // const listItems = fruits.map(fruit => <li> 
    //                                         {fruit.name}: &nbsp;
    //                                         <b>{fruit.calories} </b></li>)

    // const listItems = lowCaloFruit.map(lowCaloFruit => <li> 
    //                                         {lowCaloFruit.name}: &nbsp;
    //                                         <b>{lowCaloFruit.calories} </b></li>)

    const listItems = highCaloFruit.map(highCaloFruit => <li> 
                                            {highCaloFruit.name}: &nbsp;
                                            <b>{highCaloFruit.calories} </b></li>)


    return(<ul>{listItems}</ul>);
}

export default List; 