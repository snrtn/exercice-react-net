import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { name: "products1", price: 100.0 },
    { name: "products2", price: 200.0 },
  ]);

  useEffect(() => {});

  function addedProduct() {
    setProducts((prevState) => [...prevState, { name: "products" + (prevState.length + 1), price: prevState.length * 100 + 100 }]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Re-Store</h1>
        <ul>
          {products.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
        <button onClick={addedProduct}>added product</button>
      </header>
    </div>
  );
}

export default App;
