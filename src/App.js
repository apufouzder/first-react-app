import logo from './logo.svg';
import './App.css';

function App() {

  const parson = {
    names: "Ratan",
    job: "online"
  }
  
  const style ={
    backgroundColor: 'red',
    color: 'blue',
    padding: '20px'
  }
  
  const myArray = ['apu', 'pranto', 'ratan', 'kamal']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name={myArray[0]}></Person>
        <Person name={myArray[2]}></Person>
        <Person name='Pranto' job='Football'></Person>
        <Person name='Ratan' job='Online'></Person>
      </header>
    </div>
  );
}


function Person(props){
  return(
    <div style={{border: '2px solid gold', margin: '10px', padding: '10px', width: '400px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.job}</h3>
    </div>
  )
}

export default App;
