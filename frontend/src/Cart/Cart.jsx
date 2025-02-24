import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import "../Cart/cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { myCart, total, setTotal, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
    setTotal(0);
    addToCart([{}]);
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT: </div>
        <div className="cart-items">
          {myCart.slice(1).map((item) => {
            return (
              <div className="cart-item">
                <img className="cart-item-img" src={item.imageUrl} alt="" />
                {item.name} : {item.price}$
              </div>
            );
          })}
          <div className="cart-total">TOTAL: {total}$</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckout}>
          DONE
        </button>
        <button className="cart-gohome" onClick={handleHome}>
          RETURN HOME
        </button>
      </section>
    </>
  );
};

export default Cart;
