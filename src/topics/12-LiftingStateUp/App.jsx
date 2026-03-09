import { useState } from "react";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import ProductCount from "./components/ProductCount";
import SearchBar from "./components/SearchBar";
import filterProducts from "./utils/filterProducts";

function App() {
  const [result, setResult] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "T-Shirt", category: "Clothing" },
  { id: 3, name: "Phone", category: "Electronics" },
  { id: 4, name: "Bread", category: "Food" },
  { id: 5, name: "Headphones", category: "Electronics" },
  { id: 6, name: "Jeans", category: "Clothing" },
  { id: 7, name: "Rice", category: "Food" },
  { id: 8, name: "Smartwatch", category: "Electronics" },
];

const filteredProducts = filterProducts(products, result, activeFilter)

  return (
    <>
      <SearchBar result={result} onChange={setResult} />
      <div className='buttons'>
        <Buttons onClick={() => setActiveFilter("all")}>All</Buttons>
        <Buttons onClick={() => setActiveFilter("electronics")}>
          Electronics
        </Buttons>
        <Buttons onClick={() => setActiveFilter("clothing")}>Clothing</Buttons>
        <Buttons onClick={() => setActiveFilter("food")}>Food</Buttons>
      </div>
      <div className='cards'>
        <Cards products={filteredProducts}  />
      </div>
      <div className='productCount'>
        <ProductCount
          total={products.length}
          showing={filteredProducts.length}
        />
      </div>
    </>
  );
}

export default App;
