import logo from './logo.svg';
import './App.css';

function App() {

  const parson = {
    names: "Ratan",
    job: "online"
  }
  const parson2 = {
    names: "Pranto",
    job: "student"
  }
  const style ={
    backgroundColor: 'red',
    color: 'blue',
    padding: '20px'
  }
  const parson3 = {
    names: 'Kamal',
    salary: 2000
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>hello</p>
        <h1 style={{color: 'cyan', backgroundColor: 'orange', padding: '10px'}}>Name: {parson.names}</h1>
        <h2 className="" style={style}>Another Person: {parson2.names}  Jos: {parson2.job}</h2>
        <h3 style={{color: 'orange', backgroundColor: 'white'}}>Parson3: {parson3.names}, Salary: {parson3.salary}</h3>
      </header>
    </div>
  );
}

export default App;
