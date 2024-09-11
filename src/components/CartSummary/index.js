import React, { useState } from 'react';
import CartContext from '../../context/CartContext';
import Checkout from '../Checkout';
import './index.css';

const CartSummary = () => {
  const [showCheckout, setShowCheckout] = useState(false); 

  return (
    <CartContext.Consumer>
      {value => {
        const { cartList } = value;
        let total = 0;

        cartList.forEach(each => {
          total += each.price * each.quantity;
        });

        const clicked = () => {
          setShowCheckout(true); 
        };

        return (
          <>
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs {total}/-
              </h1>
              <p className="total-items">{cartList.length} Items in cart</p>
              <button type="button" className="checkout-button d-sm-none" onClick={clicked}>
                Checkout
              </button>
            </div>

            <button type="button" className="checkout-button d-lg-none" onClick={clicked}>
              Checkout
            </button>

            {showCheckout && <Checkout total={total} />}
          </>
        );
      }}
    </CartContext.Consumer>
  );
};

export default CartSummary;
