export default function Cart({ setDisplay, cartItems, setCart }) {
  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.quantity;
      return item;
    });
    // console.log(cartItems);
    return total;
  };

  const checkQuantity = (item) => {
    let bool = false;
    cartItems.map((obj) => {
      if (obj.id === item.id) {
        if (obj.quantity === 1) {
          bool = true;
        }
      }
    });
    return bool;
  };

  const decrement = (item) => {
    if (checkQuantity(item)) {
      setCart((prev) => prev.filter((obj) => obj.id !== item.id));
    } else {
      setCart((prev) =>
        prev.map((obj) => {
          if (obj.id === item.id && obj.quantity > 0) {
            return { ...obj, quantity: obj.quantity - 1 };
          }
          return obj;
        })
      );
    }
  };
  const increment = (item) => {
    setCart((prev) =>
      prev.map((obj) => {
        if (obj.id === item.id) {
          return { ...obj, quantity: obj.quantity + 1 };
        }
        return obj;
      })
    );
  };

  const removeItem = (item) => {
    setCart((prev) =>
      // prev.map((obj) => {
      // });
      prev.filter((obj) => obj.id !== item.id)
    );
  };

  const totalPrice = () => {
    let total = 0;
    cartItems.map((item) => (total += item.price * item.quantity));
    return total;
  };

  return (
    <div className="cart">
      <h1> cart items = {getTotal()}</h1>

      {cartItems.map((item, index) => (
        <div className="cart-items" key={index}>
          <div>
            {item.title}&nbsp; ({item.price})&nbsp; &nbsp; &nbsp;
            <button onClick={() => decrement(item)}>-</button>
            <input
              readOnly
              style={{ padding: "5px", width: "50px" }}
              type="number"
              value={item.quantity}
            />
            <button onClick={() => increment(item)}>+</button>&nbsp; = &nbsp;
            &#8377;
            {item.price * item.quantity}&nbsp;
            <button onClick={() => removeItem(item)}>remove</button>
          </div>
        </div>
      ))}
      <b>Total= {totalPrice()} </b>
      <button
        onClick={() => setDisplay(false)}
        href="#"
        className="modal-close"
      >
        &times;
      </button>
    </div>
  );
}
