import "../pages/Cart/cartPage.css"

import React from "react"

import { deleteFromCart } from "../redux/CartSlice/CartAndLikedSlice"
import { Products } from "../redux/CartSlice/types"
import { useAppDispatch } from "../redux/store"

export const CartCard: React.FC<Products> = ({id, title, imageUrl, price}) => {

    const dispatch = useAppDispatch()

    return (
        <>
            <div className="card-product-item">
                <img onClick={() => dispatch(deleteFromCart(Number(id)))} src="./img/trashcan.png" alt="" className="trashcan-cart" />
                <img className="cart-img-product-item" src={imageUrl} alt=" "  />
                <div className="price-and-title-cart">
                    <p className="cart-product-name">{title}</p>
                    <p className="cart-product-price">{price} руб.</p>
                </div>
            </div>
        </>
    )
}