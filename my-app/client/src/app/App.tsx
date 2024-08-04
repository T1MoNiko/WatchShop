import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom"; 

import Home from "../pages/Home/Home";
import CartPage from "../pages/Cart/CartPage";
import LikedPage from "../pages/LikedPage/LikedProductsPage"
import RegPage from "../pages/RegPage/RegPage"
// import AccountPage from "../pages/AccountPage/AccountPage";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { fetchData } from "../redux/ProductsSlice/ProductsSlice";
import { instance } from "../utils/axiosConfig";
import { setAuth } from "../redux/PrivatOfficeSlice/PrivatOfficeSlice";
import AccountPage from "../pages/AccountPage/AccountPage";

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
      instance().post('/auth/profile')
      .then(res => res.data ? dispatch(setAuth(true)) : null)
      .catch(err => console.log(err))
    }, [])

    useEffect(() => {
      
      dispatch(fetchData())
    }, [])


  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="cart" element={<CartPage />} />
       <Route path="liked" element={<LikedPage />} />
       <Route path="reg" element={<RegPage />} />
       <Route path="account" element={<AccountPage />} />
    </Routes>
  )
}

export default App;
