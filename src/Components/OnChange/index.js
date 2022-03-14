import React from 'react';

function Form () {

    function grabarInfo(event){
        console.log(event.target.value)
    }

    return (
        <form>
            <input placeholder='Ingresa tu Info Aqui'
                   onChange={(event) => grabarInfo(event)}
            />
            <button>Submit Form!</button>
        </form>
    )
}

export default Form;
