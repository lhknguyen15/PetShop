import React from "react";
import "../Dogs/dogs.css";
const DogsCart = (props) => {
  const { id, name, breed, description, price, imageUrl } = props;
  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
          <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`} />
        </div>
        <div className="dogs-description">{description}</div>
        <div className="dogs-price">{price}$</div>
        <button className="dogs-btn">ADD TO CART</button>
      </section>
    </>
  );
};

export default DogsCart;
