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
        },
        addToLiked(state, action: PayloadAction<Products>) {
            state.likedItems.push({...action.payload})
        },
        deleteFromLiked(state, action: PayloadAction<number>) {
           state.likedItems = state.likedItems.filter((obj) => Number(obj.id) !== Number(action.payload))
        },
        deleteFromCart(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.filter((obj) => Number(obj.id) !== Number(action.payload))
        },
        counterIncrement(state, action) {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === action.payload) {
                        return {...item, count: item.count ? ++item.count : 1}
                    }
                    return item
                })
        },
        counterDecrement(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    return {...item, count: item.count && (item.count - 1) > 0 ? --item.count : 1}
                }
                return item
            })
    }
    }
})

export const { addToCart, addToLiked, deleteFromLiked, deleteFromCart, counterIncrement, counterDecrement } = CartAndLikedSlice.actions
export const CartAndLikedSliceReducer = CartAndLikedSlice.reducer
