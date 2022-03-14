import React from "react";
import "./Card.scss";
import {Button, Card} from 'react-bootstrap'
//import Card from 'react-bootstrap/Card'
//import CustomCard from 'react-bootstrap/CustomCard'
import Badge from 'react-bootstrap/Badge'
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
//objetivo saber si el comprador agrego un producto a sus favoritos
//1 agregamos un boton para sumar la cantidad que queremos comprar
//2 agregamos un corazon de icono para poder guardar como favorito 
//3 agregamos un estado para poder llevar la cuenta 
//4 agregamos un estado para saber si un usuario agrego el producto con

function CardComponent () {
    return (
        const [addedToFav, setAddedToFav] = React.useState(false)

	function addToFav() {
		console.log('add to fav');
		setAddedToFav(true)
	}
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src='https://getuikit.com/v2/docs/images/placeholder_200x100.svg'
			/>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Button variant='primary' onClick={addToFav}>
					Agregar a favs
				</Button>
				{addedToFav && (
					<Badge pill bg='primary'>
					Carrito 4
					</Badge>
				)}
			</Card.Body>
		</Card>
    )
}

function ExcerciseCard () {
    const [number, setNumber] = React.useState(0)
    function addToCart(){
        console.log('Click')
        setNumber(number + 1)
    }
    return(      
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" onClick={addToCart} >Add to Cart</Button>
    <div>Cart: {number} </div>
  </Card.Body>
</Card>
    )
}

//export default Card;
//export default CustomCard;
export default CardComponent;

