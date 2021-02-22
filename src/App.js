import logo from './logo.svg';
import './App.css';

function App() {
  const myArray = ['apu', 'pranto', 'ratan', 'kamal']
  const products = [
    { name: 'Photoshop', price: '$99.99', pra: 'Create precise designs, Illustrations, and vector graphics on desktop and iPad.' },
    { name: 'Acrobat Pro', price: '$55.99', pra: 'Create precise designs, Illustrations, and vector graphics on desktop and iPad.' },
    { name: 'Premiere Pro', price: '$49.99', pra: 'Create precise designs, Illustrations, and vector graphics on desktop and iPad.' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <Person name={myArray[0]}></Person>
        <Person name={myArray[2]}></Person>
        <Person name='Pranto' job='Football'></Person>
        <Person name='Ratan' job='Online'></Person>
      </header>
    </div>
  );
}

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
  console.log(props);
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
