import "./header.scss"

import React from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";



const Header: React.FC = () => {

    // const { account } = useSelector((state: RootState) => state.AccountReducer.data)

    return (
        <header>
            <div className="line-reg">
                <p className="number">8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </p>
                {
                    // account ? null : <Link to="reg"><p className="reg-and-sign_in">Войти / Регистрация</p></Link>
                }
            </div>
            <nav className="navigation">
                <img src={"./img/logo.png"} className="logo" alt="" />
                <div className="menu-links">
                    <ul className="btns-on-header">
                        {/* <li className="link-on-header"><Link to={account ? 'account' : 'reg'}>личный кабинет</Link></li> */}
                    </ul>
                    <div>
                        <Link to="cart"><img src={"./img/cart.png"} alt="" className="cart" /></Link> 
                        <Link to="liked"><img src="./img/likedIcon.png" alt="" className="search" /></Link>
                    </div> 
                </div>
            </nav>
            <div className="img-with-title">
                <div className="logo-on-main-pic">
                    <img src={"./img/logo-pic.png"} className="logo-pic" alt="" />
                    <p className="article-about-prd">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;