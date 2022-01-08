import React from "react";
import "./Product.css";
import { useStateValue } from "../../../state/StateProvider";

function Product({ id, title, image, price, rating }) {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <div>{title}</div>
        <div className="product__price">
          <small>£</small>
          <strong>{price}</strong>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <p>⭐</p>;
              })}
          </div>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} className="product__button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
