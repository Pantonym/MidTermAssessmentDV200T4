import React, { useState } from 'react';

const Checkout = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [cart, setCart] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    // Add more items to the cart as needed
  ]);

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {/* Payment Details Form */}
      <div className='pay' style={{ width: '45%' }}>
        <h2>Payment Details</h2>
        <form>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handlePaymentChange}
            required
          />
          <br />
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={paymentDetails.expiryDate}
            onChange={handlePaymentChange}
            required
          />
          <br />
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handlePaymentChange}
            required
          />
        </form>
      </div>
      
      {/* Cart Display */}
      <div className='cart' style={{ width: '45%' }}>
        <h2>Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <h3>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>
      </div>
    </div>
  );
};

export default Checkout;