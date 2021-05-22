const products = [
  {
    id: 1,
    title: "mango",
    price: 20
  },
  {
    id: 2,
    title: "banana",
    price: 15
  },
  {
    id: 3,
    title: "orange",
    price: 10
  }
];

const ItemContainer = ({ cart, setCart }) => {
  const filterItems = (items, id) => {
    return items.filter((item) => item.id === id);
  };

  const addCart = (item) => {
    if (filterItems(cart, item.id).length > 0) {
      setCart((prev) =>
        prev.map((obj) =>
          obj.id === item.id ? { ...obj, quantity: obj.quantity + 1 } : obj
        )
      );
    } else {
      let newObj = {
        id: item.id,
        title: `${item.title}`,
        quantity: 1,
        price: item.price
      };
      setCart((prev) => prev.concat(newObj));
    }
    console.log(cart);
  };

  console.log(cart.length);

  return (
    <div className="container">
      {products.map((item) => (
        <div className="cards" key={item.id}>
          <span className="card-title">{item.title}</span>
          &#8377;{item.price}&nbsp;
          <button onClick={() => addCart(item)}>Add</button>
        </div>
      ))}
    </div>
  );
};
export default ItemContainer;
