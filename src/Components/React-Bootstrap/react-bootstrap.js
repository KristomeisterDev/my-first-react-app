import React from 'react';
import Button from 'react-bootstrap/Button';

function ReactBootstrap() {
    //const isDisable = false
    function click() {
        console.log('I Have Been Click!')
    }
    return <Button variant="primary" /*disable={isDisable}*/ onClick={click}>React Bootstrap Here!</Button>
}

export default ReactBootstrap;