import "./styles.css";
import Header from "./Header";
import ItemContainer from "./ItemContainer";
import Cart from "./Cart";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [display, setDisplay] = useState(false);

  // console.log(display);
  return (
    <div className="App">
      <Header
        display={display}
        setCart={setCart}
        setDisplay={setDisplay}
        cartItems={cart}
      />
      <ItemContainer cart={cart} setCart={setCart} />
      <div
        className={display ? "modal" : "modal-inactive"}
        // style={{ display: display ? "" : "none" }}
      >
        <Cart setDisplay={setDisplay} setCart={setCart} cartItems={cart} />
      </div>
    </div>
  );
}
