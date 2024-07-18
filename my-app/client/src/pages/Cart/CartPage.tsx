import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import React from "react"

import { CartCard } from "../../components/cartCard/CartCard"
import { totalPrice } from "../../utils/totalPrice"
import { RootState } from "../../redux/store"
import BtnBack from "../../components/btnBack/BtnBack"

const CartPage: React.FC = () => {

    const  { cartItems } = useSelector((state: RootState) => state.CartAndLikedSliceReducer)

    return (
        <>
        <BtnBack/>
        {cartItems.length ?
            (
            <>
                <div uk-scrollspy="cls: uk-animation-fade; delay: 500">
                    <h2 className="cart-name">Корзина</h2>
                    {cartItems.map((product, key) => {
                        return <CartCard {...product} key={key} />
                    })}
                </div>
                <div className="container-cart">
                    <p className="total-price">Итого: <span>{totalPrice(cartItems)} руб</span></p>
                    <p className="amount-of-products">Количество продуктов: {cartItems.length}</p>
                    <button className="buy-cart">Оформить заказ</button> 
                    <p className="cart-rules">Соглашаюсь с правилами услуг данного сервиса</p>   
                </div>
            </>
            ) : 
            <div>
                <h1 className="nothing-in-liked">
                    You don't have any products added to your cart <br/>
                    😐<br />
                    add something to make products appear
                </h1>
            </div>}
        </>
    )
}

export default CartPage;