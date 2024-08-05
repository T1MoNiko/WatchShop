import "./productCard.scss"

import React, { useState, useEffect } from "react"

import { addToLiked, deleteFromLiked, addToCart, deleteFromCart } from "../../redux/ProductsSlice/ProductsSlice"
import { useDispatch } from "react-redux/es/exports"
import { useSelector } from "react-redux/es/exports"
import { RootState } from "../../redux/store"
import { Products } from "../../redux/ProductsSlice/types"
import { instance } from "../../utils/axiosConfig"
import { useNavigate } from "react-router-dom"

export const ProductCard: React.FC<Products> = ({ name, price, img, id }) => {
    const [activeLike, setActiveLike] = useState(false);
    const [activeCart, setActiveCart] = useState(false);
    const navigate = useNavigate()

    const dispatch = useDispatch()


    const { likedItems } = useSelector((state: RootState) => state.CartAndLikedSliceReducer)
    const { cartItems } = useSelector((state: RootState) => state.CartAndLikedSliceReducer)
    const { isAuth } =  useSelector((state: RootState) => state.AccountReducer)

    useEffect(() => {
        if (!activeCart) {
            cartItems.map(obj => obj.product_id).includes(id) ? setActiveCart(true) : setActiveCart(false)
        }
        if (!activeLike) {
            likedItems.map(obj => obj.product_id).includes(id) ? setActiveLike(true) : setActiveLike(false)
        } 
        //eslint-disable-next-line
    }, [cartItems.length, likedItems.length])
    
    const likeClickHandler = () => {
        if (!isAuth) {
            navigate('reg')
        }
        if (!activeLike) {
            setActiveLike(true)
            dispatch(addToLiked([{name, price: +price, img, id, product_id: id}]))
            instance().post('products/liked', {name: name, price: +price, img: img, product_id: id, count: 1})
        } else if (activeLike) {
            setActiveLike(false)
            dispatch(deleteFromLiked(id))
            instance().delete('products/liked', {data: id})
        }
    }

    const cartClickHandler = () => {
        if (!isAuth) {
            navigate('reg')
            return;
        }
        if (!activeCart) {
            setActiveCart(true)
            dispatch(addToCart([{name, price, img, product_id: id, id, count: 1}])) 
            instance().post('products/cart', {name: name, price: +price, img: img, product_id: id, count: 1})
        } else if (activeCart) {
            setActiveCart(false)
            dispatch(deleteFromCart(id))
            instance().delete('products/cart', {data: id})
        }
    }

    return (
        <div className="product">
            <div className="product-item">
                <div className="product-item__box">
                    <img onClick={() => likeClickHandler()} src="./img/heart.png" alt="" 
                        className={activeLike ? "img-product-like-active" : "img-product-like"} />
                    <img onClick={() => cartClickHandler()} src="./img/cart.png" alt="" 
                        className={activeCart ? "img-product-cart-active" : "img-product-cart"} />
                    <img className="img-product-item" src={img} alt=""  />
                </div>
                <p className="product-name">{name}</p>
                <p className="product-price">{price} руб.</p>
            </div>
        </div>
        
    )
}