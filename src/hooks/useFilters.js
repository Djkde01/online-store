import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      const { category, minPrice } = filters;
      return (
        (category === "all" || product.category === category) &&
        product.price >= minPrice
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
