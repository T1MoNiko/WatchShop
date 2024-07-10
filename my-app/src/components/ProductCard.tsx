import React, { useState, useEffect } from "react"

import { addToLiked, deleteFromLiked, addToCart, deleteFromCart } from "../redux/CartSlice/CartAndLikedSlice"
import { useDispatch } from "react-redux/es/exports"
import { useSelector } from "react-redux/es/exports"
import { RootState } from "../redux/store"
import { Products } from "../redux/CartSlice/types"

export const ProductCard: React.FC<Products> = ({ title, price, imageUrl, id }) => {
    const [activeLike, setActiveLike] = useState(false);
    const [activeCart, setActiveCart] = useState(false);

    const dispatch = useDispatch()

    const { likedItems } = useSelector((state: RootState) => state.CartAndLikedSliceReducer)
    const { cartItems } = useSelector((state: RootState) => state.CartAndLikedSliceReducer)

    useEffect(() => {
        if (!activeCart) {
            console.log(cartItems)
            cartItems.map(obj => obj.id).includes(id) ? setActiveCart(true) : setActiveCart(false)
        }
        if (!activeLike) {
            likedItems.map(obj => obj.id).includes(id) ? setActiveLike(true) : setActiveLike(false)
        } 
        //eslint-disable-next-line
    }, [])
    
    const onLike = () => {
        if (!activeLike) {
            setActiveLike(true)
            dispatch(addToLiked({title, price, imageUrl, id})) 
        } else if (activeLike) {
            setActiveLike(false)
            dispatch(deleteFromLiked(id))
        }
    }

    const onCart = () => {
        if (!activeCart) {
            setActiveCart(true)
            dispatch(addToCart({title, price, imageUrl, id})) 
        } else if (activeCart) {
            setActiveCart(false)
            dispatch(deleteFromCart(id))
        }
    }

    return (
        <div className="product-item">
            <img onClick={() => onLike()} src="./img/heart.png" alt="" className={activeLike ? "img-product-like-active" : "img-product-like"} />
            <img onClick={() => onCart()} src="./img/cart.png" alt="" className={activeCart ? "img-product-cart-active" : "img-product-cart"} />
            <img className="img-product-item" src={imageUrl} alt=""  />
            <p className="product-name">{title}</p>
            <p className="product-price">{price} руб.</p>
        </div>
    )
}