import logo from './logo.svg';
import './App.scss';
import React from 'react';
import CustomButton from './Components/Button'
import Card from './Components/Card'

function Header(props ) {
  console.log(props.name)
  return (
    <header style= {{display: 'flex', justifyContent: 'space-around'}} >
    <h3>Kodemia 2022</h3>
    <h3>Home</h3>
    <h3>About</h3>
    <h3>Projects</h3>
    <h3>{name !== null ? {props.name} : null }</h3>
    </header>
  )
}

function Footer(props ) {
  console.log(props)
  return (
    <>
    <footer> Hecho con amor por {props.name}</footer>
    </>
  )
}

function Layout(props ) {
  console.log(props)
  return (
    <div>
    
      <Header name = {props.name}/>
        {props.children}
      <Footer name= {props.name}/>
    </div>
  )
}

function PageTitle(props){
  return (
    <h2 style={{ backgroundColor: 'green'}}>{props.children}</h2>
  )
}



function App() {
  const name = null
  const age = null
  const renderIfAgeIsNotNull = age && 'true'
  const ageCopy = age ? `Tengo ${age} años de edad.` : ''
  return (
    <div className="App">
      <Layout 
      name= {name} 
      ageCopy={ageCopy}
      age={age}
      bio={bio} 
      > 
      <main className="App-header">
        <PageTitle><h2>Hola, soy {name} </h2></PageTitle>
        <PageTitle>Esta es mi Bio</PageTitle>
        <PageTitle>Titulo adicional</PageTitle>
        {age !== null ? <h5> {ageCopy} </h5> : null}
        <p>Breve pero muy breve bio de cristian soy koder, me gusta leer y videojuegos, trabajo de Asistente Juridico y tengo dos bebes.</p>
        <CustomButton color = 'blue' > Dale Click Aqui </CustomButton>
        <CustomButton color = 'green' > Sing Up </CustomButton>
        <CustomButton color = 'blue' > Sing In </CustomButton>
        <img src={logo} className="App-logo" alt="logo" />
        <Card/>
      </main>
      </Layout>
    </div>
  );
}

export default App;
