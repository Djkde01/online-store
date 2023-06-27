import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";

function App() {
  const [products] = useState(initialProducts);

  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      const { category, minPrice } = filters;
      return (
        (category === "all" || product.category === category) &&
        product.price >= minPrice
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
