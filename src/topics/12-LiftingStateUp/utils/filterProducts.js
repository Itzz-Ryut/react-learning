function filterProducts(products, query, activeFilter) {
  return products
    .filter(
      (product) =>
        activeFilter === "all" ||
        product.category.toLowerCase() === activeFilter,
    )
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
}

export default filterProducts;
