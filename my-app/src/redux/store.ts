import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { CartAndLikedSliceReducer } from "./CartSlice/CartAndLikedSlice"; 
import { AccountReducer } from "./PrivatOfficeSlice/PrivatOfficeSlice";

export const store = configureStore({
    reducer: {
        CartAndLikedSliceReducer,
        AccountReducer
    }
})

type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()