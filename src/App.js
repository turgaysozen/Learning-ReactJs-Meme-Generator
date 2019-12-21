import React from "react";
import ProductList from "./productsList";
import Product from "../src/Components/Product";

function App() {
   const productComponent = ProductList.map(item => <Product key={item.id} product={item}/>)
    return (
      <div>
          {productComponent}
      </div>
    )
}

export default App;
