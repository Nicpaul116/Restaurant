import React, { useState } from "react";
import { itemData } from "./items";
import "./menu.css";
import { specialData } from "./special";
import { Cartproduct } from "../../containers";
import { FaCartShopping } from "react-icons/fa6";

const Menu = () => {
  const [cartVisibility, setcartVisibility] = useState(false);
  const [productsInCart, setproductsInCart] = useState([]);
  const addProductToCart = (itemdata) => {
    const newitem = {
      ...itemdata,
      count: 1,
    };
    setproductsInCart([...productsInCart, newitem]);
  };

  const onQuantityChange = (productId, count) => {
    setproductsInCart((oldState) => {
      const productsindex = oldState.findIndex((item) => item.id === productId);
      if (productsindex !== -1) {
        oldState[productsindex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (itemdata) => {
    setproductsInCart((oldState) => {
      const productsindex = oldState.findIndex(
        (item) => item.id === itemdata.id
      );
      if (productsindex !== -1) {
        oldState.splice(productsindex, 1);
      }
      return [...oldState];
    });
  };
  return (
    <div className="menu" id="Menu">
      <Cartproduct
        visibility={cartVisibility}
        itemData={productsInCart}
        specialData={productsInCart}
        onClose={() => setcartVisibility(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <p onClick={() => setcartVisibility(true)}>
        <FaCartShopping size={30} className="button-click " />
        {productsInCart.length > 0 && (
          <span className="product-count">{productsInCart.length}</span>
        )}
      </p>
      <div className="menu_header">
        <h1>Menu</h1>
      </div>
      <div className="menu_item">
        {itemData.map((item, index) => {
          return (
            <div key={index} className="item_header">
              <img src={item.img} alt={item.alt} />
              <div className="item_info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <h3>{item.prize}</h3>
                <button
                  className="item_button"
                  onClick={() => addProductToCart(item)}
                >
                  {item.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="special_heading">
        <h1>On Special</h1>
      </div>
      <div className="special_menu">
        {specialData.map((special, index) => {
          return (
            <div className="special_card" key={index}>
              <img src={special.img} alt={special.alt} />
              <h3>{special.name}</h3>
              <p>{special.desc}</p>
              <h3>{special.prize}</h3>
              <button
                className="special_button"
                onClick={() => addProductToCart(special)}
              >
                {special.button}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
