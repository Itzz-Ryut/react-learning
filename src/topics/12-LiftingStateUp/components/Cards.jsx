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

export default Cards;