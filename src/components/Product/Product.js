import React from "react";
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "../../StateProvider";

function Product({id, title, price, rating, image}) {

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return(

        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">
                    {Array(rating)
                    .fill()
                    .map(()=>(
                        <p><StarIcon/></p>
                    ))}</p>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>

        </div>


    );
}

export default Product;