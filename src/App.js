import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Card from './Components/Card'
import Form from './Components/OnChange'
import CustomCard from './Components/Card'
function App() {  
  return (
      <div>
        <header>Clase 2 React Components and Compositions</header>
        <div className="Card-Container">
          <Card name='Luis'/>
          <Card price='$100'/>
          <Card price='$150'/>
          <Card price='$175'/>
          <CustomCard/>
        </div>
          <Form/>
      </div>
    
  );
}

export default App;
