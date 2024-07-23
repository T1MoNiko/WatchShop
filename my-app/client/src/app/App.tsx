import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom"; 

import Home from "../pages/Home/Home";
import CartPage from "../pages/Cart/CartPage";
import LikedPage from "../pages/LikedPage/LikedProductsPage"
import RegPage from "../pages/RegPage/RegPage"
// import AccountPage from "../pages/AccountPage/AccountPage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const App: React.FC = () => {
    const isMounted = useRef(false)

    const { ...rest } = useSelector((state: RootState) => state.CartAndLikedSliceReducer)
    // const { data } = useSelector((state: RootState) => state.AccountReducer)

    // useEffect(() => {
    //     if (isMounted.current) {
    //       localStorage.setItem("cartAndLiked", JSON.stringify(rest))
    //     }
    
    //     isMounted.current = true
    //   }, [rest, rest.likedItems, rest.cartItems])
      
    //   useEffect(() => {
    //       if (isMounted.current) {
    //         localStorage.setItem("account", JSON.stringify(data))

    //       }
    //       isMounted.current = true
    //     }, [data])

  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="cart" element={<CartPage />} />
       <Route path="liked" element={<LikedPage />} />
       <Route path="reg" element={<RegPage />} />
       {/* <Route path="account" element={<AccountPage />} /> */}
    </Routes>
  )
}

export default App;
