/* eslint-disable react/prop-types */
import "./ProductCard.css";
import star from "../../assets/white-star.png";
import basket from "../../assets/basket.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import UserContext from "../../contexts/UserContext";

import config from "../../config.json";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const user = useContext(UserContext);
  return (
    <article className="product_card">
      <div className="product_image">
        <NavLink to={`/product/${product?._id}`}>
          <img
            src={`${config.backendURL}/products/${product?.images[0]}`}
            alt="product image"
          />
        </NavLink>
      </div>

      <div className="product_details">
        <h3 className="product_price">${product?.price}</h3>
        <p className="product_title">{product?.title}</p>

        <footer className="align_center product_info_footer">
          <div className="align_center">
            <p className="align_center product_rating">
              <img src={star} alt="star" /> {product?.reviews.rate}
            </p>
            <p className="product_review_count">{product?.reviews.counts}</p>
          </div>
          {product?.stock > 0 && user && (
            <button className="add_to_cart">
              <img
                src={basket}
                alt="basket"
                onClick={() => addToCart(product, 1)}
              />
            </button>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ProductCard;
