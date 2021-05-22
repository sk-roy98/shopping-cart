const Header = ({ cartItems, setCart, display, setDisplay }) => {
  function getTotal() {
    let total = 0;
    cartItems.map((item) => {
      total += item.quantity;
      return item;
    });
    return total;
  }

  return (
    <div className="header">
      <button onClick={() => setDisplay(!display)}>Cart {getTotal()}</button>
      <button onClick={() => setCart([])}>ClearCart</button>
    </div>
  );
};
export default Header;
