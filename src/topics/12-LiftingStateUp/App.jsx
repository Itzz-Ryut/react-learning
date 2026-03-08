import { useState } from "react";

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
  const filteredProducts = products
    .filter(
      (product) =>
        activeFilter === "all" ||
        product.category.toLowerCase() === activeFilter,
    )
    .filter((product) =>
      product.name.toLowerCase().includes(result.toLowerCase()),
    );

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

function SearchBar({ result, onChange }) {
  return (
    <input
      type='text'
      value={result}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search here'
    />
  );
}

function Cards({ products }) {
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.name}>
            <p>Item no. {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Category: {item.category}</p>
          </li>
        ))}
      </ul>
        {products.length === 0 && <p>No products found 😕</p>}
    </div>
    
  );
}

function Buttons({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function ProductCount({ total, showing }) {
  return (
    <p>
      Showing {showing} of {total} products
    </p>
  );
}

export default App;
