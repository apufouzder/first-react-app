import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const myArray = ['apu', 'pranto', 'ratan', 'kamal', 'Jamal']
  const products = [
    { name: 'Photoshop', price: '$99.99' },
    { name: 'Acrobat Pro', price: '$55.99' },
    { name: 'Premiere Pro', price: '$49.99' },
    { name: 'Premiere Galo', price: '$40.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* State component Counter */}
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            myArray.map(friend => <li>{friend}</li>)
          }
          {
            products.map(pd => <li>{pd.name}</li>)
          }
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name={myArray[0]}></Person>
        <Person name={myArray[2]}></Person>
        <Person name='Pranto' job='Football'></Person>
        <Person name='Ratan' job='Online'></Person>
      </header>
    </div>
  );
}

// Load dynamic data, API call useEffect integrate state
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {
         console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>) 
        }
      </ul>
    </div>
  )
}
// Load dynamic data, API call useEffect integrate state

// Start State function
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
// End State function

function Product(props) {
  const productStyle = {
    width: '400px',
    height: '280px',
    border: '2px solid cyan',
    margin: '5px',
    float: 'left',
    padding: '5px',
    color: 'cyan',
    background: '#182338'
  }
  const { name, price, pra } = props.product;
  // console.log(props);
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h2>{price}</h2>
      <p>{pra}</p>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: '2px solid gold', margin: '10px', padding: '10px', width: '400px' }}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.job}</h3>
    </div>
  )
}

export default App;
