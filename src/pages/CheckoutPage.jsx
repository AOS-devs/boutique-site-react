const CheckoutPage = () => (
  <div>
    <h2>Checkout</h2>
    <form>
      <input type="text" placeholder="Full Name" required />
      <input type="text" placeholder="Address" required />
      <input type="text" placeholder="Card Number" required />
      <button type="submit">Place Order</button>
    </form>
  </div>
);

export default CheckoutPage;
