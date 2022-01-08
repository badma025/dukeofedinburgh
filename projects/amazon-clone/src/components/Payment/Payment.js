import React from "react";
import "./Payment.css";
import { useStateValue } from "../../state/StateProvider";
import Product from "../Checkout/Product/Product";
import { Link } from "react-router-dom";

function Payment() {
  const [{ user, basket }, disaptch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* payment section => delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p className="">{user?.email}</p>
            <p>123 React Lane</p>
            <p>London</p>
          </div>
        </div>
        {/* payment section => review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <Product
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        {/* payment section => payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe magic will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
