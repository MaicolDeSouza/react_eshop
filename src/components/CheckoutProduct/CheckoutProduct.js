import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {

  // eslint-disable-next-line no-unused-vars
  const[{basket}, dispatch] = useStateValue();

  const removeFromBasket = ()=>{
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutproduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
