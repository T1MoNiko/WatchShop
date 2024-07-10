import React from "react" 

import { useAppDispatch } from "../redux/store"
import { deleteFromLiked } from "../redux/CartSlice/CartAndLikedSlice"
import { Products } from "../redux/CartSlice/types"

export const LikeCard: React.FC<Products> = ({id, title, imageUrl, price}) => {

    const dispatch = useAppDispatch()

    return (
        <div className="product-item-added">
            <img onClick={() => dispatch(deleteFromLiked(id))} src="./img/heart.png" alt="" className="img-product-added-active" />
            <img className="img-product-liked" src={imageUrl} alt=" "  />
            <p className="product-name">{title}</p>
            <p className="product-price">{price} руб.</p>
        </div>
    )
}