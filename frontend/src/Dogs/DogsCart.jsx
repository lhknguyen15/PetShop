import { useState, React, useContext } from "react";
import "../Dogs/dogs.css";
import { CartContext } from "../Contexts/CartContext";
const DogsCart = (props) => {
  const [isAdded, setAdded] = useState(false);
  const { addToCart, setTotal } = useContext(CartContext);
  const { id, name, breed, description, price, imageUrl } = props;
  const handleclick = () => {
    setAdded(true);
    const newItems = {
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    addToCart((item) => [...item, newItems]);
    setTotal((total) => (total += Number(price)));
  };
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>
            {name} {breed}
          </p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`} />
        </div>
        <div className="dogs-description">{description}</div>
        <div className="dogs-price">{price}$</div>
        {isAdded ? (
          <button disabled className="dogs-btn-disabled">
            ADDED
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleclick}>
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
};

export default DogsCart;
