import PropTypes from "prop-types";
import { AddToCartIcon } from "./Icons";

import "../styles/Products.css";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>$ {product.price}</p>
            </div>
            <div>
              <button type="button">
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
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
