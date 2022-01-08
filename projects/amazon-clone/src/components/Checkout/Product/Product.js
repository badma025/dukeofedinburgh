import React from "react";
import "./Product.css";
import { useStateValue } from "../../../state/StateProvider";

function Product({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="product">
      <img className="product__image" src={image} alt="" />

      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            //.fill() fills the values with an empty string
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default Product;
