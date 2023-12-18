import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // Default Block Style 

  const contentBlockStyle = {
    display : 'flex',
    padding : '40px 15px'
  }

  // Product Content 
  const productContent = [
    {name : 'Adobe Photoshop', description : 'Awesome Photoshop'},
    {name : 'Adobe XD', description : 'Awesome Adobe XD'},
    {name : 'Adobe Indesign', description : 'Awesome Adobe Indesign'},
  ]

  //console.log(productContent[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="contentblock" style={contentBlockStyle}>
        <Product product={productContent[0]}></Product>
        <Product product={productContent[1]}></Product>
        <Product product={productContent[2]}></Product>
      </div>

      <div className="contentblock" style={contentBlockStyle}>
        <User></User>
      </div>
    </div>
  );
}

function Product(props){

  //console.log(props)
  //console.log(props.product.name)
  // Single Product Style 
  const productStyle = {
    backgroundColor : '#059678',
    border : '1px solid #eee',
    borderRadius : '4px',
    padding : '15px',
    flex : '1 0 0%',
    margin : '0 15px'
  }

  // Single Product JSX Markup
  return (
    <div className="single-product" style={productStyle}>
      <h3>{props.product.name}</h3>
      <p>{props.product.description}</p>
    </div>
  )

}


function User(props) {

  // Destructured UseState : const [initialValue, Function] = usetState (initialValue) 
  const [count, setCount] = useState(0);

  // Destructure Explanation  
  // const result = ['good', 'bad'];
  // const first = result[0];
  // const second = result[1];
  // console.log(first, second); // good bad 

  // const [wow, nice] = ['good', 'bad'];
  // console.log(wow, wow) // good bad 

  //console.log(count, setCount)

  return (
    <div className="user-block">
      <h3>Total User : {count}</h3>
      <button onClick={() => {if(count > 0) {setCount(count - 1)} }}>- Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase +</button>
    </div>
  )
}


export default App;
