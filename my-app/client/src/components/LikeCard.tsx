import React from "react" 

import { useAppDispatch } from "../redux/store"
import { Products } from "../redux/ProductsSlice/types"
import { deleteFromLiked } from "../redux/ProductsSlice/ProductsSlice"

export const LikeCard: React.FC<Products> = ({id, name, img, price}) => {

    const dispatch = useAppDispatch()

    return (
        <div className="product-item-added">
            <img onClick={() => dispatch(deleteFromLiked(id))} src="./img/heart.png" alt="" className="img-product-added-active" />
            <img className="img-product-liked" src={img} alt=" "  />
            <p className="product-name">{name}</p>
            <p className="product-price">{price} руб.</p>
        </div>
    )
}