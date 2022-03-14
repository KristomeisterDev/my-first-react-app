//import React from 'react'
import React, {useState} from 'react' 
function CountExample(){
    //declara una nueva variable de estado, que llamaremos 'count'
    const [count, setCount] = /*React.*/useState(0);
    //count = tu variable
    //setCount = la funcion que actualiza tu variable
    //lo que va entre parentesis del useState() es tu estado inicial

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default CountExample;