import React from "react";
import "./Card.scss";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


function Card(props) {
    console.log(props.price)
    return (
        /*< div className="Card">
            <img src="..." alt="..."  />
            <div>
                <h5>Card Title</h5>
                <p>
                Ejemplo de texto en el contenido de la card
                </p>
                <a href='#' >
                    Va a Algun Lado
                </a>
            </div>
        </div>*/
        <div>
            Card Example
            <img src='' alt='Picture' />
            <h1> Soccer T-Shirt</h1>
            <p>Oficial Replica</p>
            <p>{props.price}</p>
            <button>Add to Cart</button>
        </div>
    );   
}

function CustomCard() {
  return (
   
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
