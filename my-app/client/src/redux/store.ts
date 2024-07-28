import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import createSagaMiddleware from 'redux-saga'

import { CartAndLikedSliceReducer } from "./CartSlice/ProductsSlice"; 
import { AccountReducer } from "./PrivatOfficeSlice/PrivatOfficeSlice";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        CartAndLikedSliceReducer,
        AccountReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run()

type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<AppDispatch>()