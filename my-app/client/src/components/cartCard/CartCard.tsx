import "../../pages/Cart/cartPage.css"
import "./cartCard.css"

import React from "react"

import { counterDecrement, counterIncrement, deleteFromCart } from "../../redux/ProductsSlice/ProductsSlice"

import { useAppDispatch } from "../../redux/store"
import { Products } from "../../redux/ProductsSlice/types"

export const CartCard: React.FC<Products> = ({id, title, imageUrl, price, count}) => {

    const dispatch = useAppDispatch()

    const incrementClickHandler = () => {
        dispatch(counterIncrement(id))
    }

    const decrementClickHandler = () => {
        dispatch(counterDecrement(id))
    }

    return (
        <>
            <div className="card-product-item">
                <img onClick={() => dispatch(deleteFromCart(Number(id)))} src="./img/trashcan.png" alt="" className="trashcan-cart" />
                <img className="cart-img-product-item" src={imageUrl} alt=" "  />
                <div className="price-and-title-cart">
                    <p className="cart-product-name">{title}</p>
                    <p className="cart-product-price">{price} руб.</p>
                </div>
                <div className="cart-product-item__counter">
                    <button className="cart-counter-btn" onClick={decrementClickHandler}>-</button>
                    <p>{count}</p>
                    <button className="cart-counter-btn" onClick={incrementClickHandler}>+</button>
                </div>
            </div>
        </>
    )
}