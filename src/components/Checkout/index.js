import React, { useEffect } from 'react';
import "./index.css"

const Checkout = (props) => {
  const { total } = props;  

  useEffect(() => {
    alert(`Total amount: Rs ${total}`);  
  }, [total]);  

  console.log('Props received:', props); 

  return (
    <div className='order-container'>
    <h1>Total amount: Rs {total}</h1> 
    <h1 className='order-success'>Order Placed Successfully.</h1>
    </div>
  );
};

export default Checkout;
