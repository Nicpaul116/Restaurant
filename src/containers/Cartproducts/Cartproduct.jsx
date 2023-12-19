import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import "./cartproduct.css";

const Cart = ({
  visibility,
  onClose,
  onProductRemove,
  itemData,
  specialData,
}) => {
  return (
    <div
      className="Cart-wrap"
      style={{ display: visibility ? "block" : "none" }}
    >
      <div className="Cart_shopping">
        <div className="Header">
          <h2>Shopping Cart</h2>
          <p className="btn closebtn" onClick={onClose}>
            <FaRegWindowClose size={30} />
          </p>
        </div>
        <div className="cart-products">
          {(itemData || [], specialData || []).length === 0 && (
            <span className="empty-text">Your Basket is Empty</span>
          )}
          {itemData.map((itemdata) => (
            <div className="cart-product" key={itemdata.id}>
              <img src={itemdata.img} alt={itemdata.alt} />
              <div className="product-info">
                <h3>{itemdata.name}</h3>
                <span className="product-price">{itemdata.prize}</span>
              </div>
              <p
                className="btn remove-btn"
                onClick={() => onProductRemove(itemdata)}
              >
                <FaRegWindowClose size={20} />
              </p>
            </div>
          ))}

          {itemData.length > 0 && (
            <div className="btn-proceed_loc">
              <button className="btn-proceed">proceed to checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
