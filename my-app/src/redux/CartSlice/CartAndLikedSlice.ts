import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDataFromLSCL } from "../../utils/getDataFromLSCL";
import { CartState, Products } from "./types"; 

const initialState: CartState = getDataFromLSCL()

const CartAndLikedSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Products>) {
            state.cartItems.push({...action.payload})
            console.log(state.cartItems)
        },
        addToLiked(state, action: PayloadAction<Products>) {
            state.likedItems.push({...action.payload})
        },
        deleteFromLiked(state, action: PayloadAction<number>) {
           state.likedItems = state.likedItems.filter((obj) => Number(obj.id) !== Number(action.payload))
        },
        deleteFromCart(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.filter((obj) => Number(obj.id) !== Number(action.payload))
         }
    }
})

export const { addToCart, addToLiked, deleteFromLiked, deleteFromCart } = CartAndLikedSlice.actions
export const CartAndLikedSliceReducer = CartAndLikedSlice.reducer
