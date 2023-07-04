import PropTypes from "prop-types";
import { AddToCartIcon } from "./Icons";

import "../styles/Products.css";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
  const { addToCart, checkProductInCart } = useCart();
  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
              </div>
              <div>
                {isProductInCart ? (
                  <button disabled>Added to cart</button>
                ) : (
                  <button type="button" onClick={() => addToCart(product)}>
                    <AddToCartIcon />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
