import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Products } from "./types"; 

const initialState: CartState = {
    cartLoading: false,
    likedLoading: false,
    productsLoading: false,
    cartItems: [],
    likedItems: [],
    products: [],
    cartError: null,
    likedError: null,
    productsError: null
}

const CartAndLikedSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchData(state) {
            state.cartLoading = true
            state.likedLoading = true
            state.productsLoading = true
        },
        failureCartData(state, action: PayloadAction<any>) {
            state.cartLoading = false
            console.log(action.payload)
        },
        failureLikedData(state, action: PayloadAction<{status: number, message: string}>) {
            state.likedLoading = false
            state.likedError = action.payload
        },
        failureProductsData(state, action: PayloadAction<unknown>) {
            state.productsLoading = false
            state.productsError = action.payload
        },
        addToCart(state, action: PayloadAction<Products[]>) {
            state.cartLoading = false
            state.cartItems.push(...action.payload)
        },
        addToLiked(state, action: PayloadAction<Products[]>) {
            state.likedLoading = false
            state.likedItems.push(...action.payload)
        },
        addToProducts(state, action: PayloadAction<Products[]>) {
            state.productsLoading = false
            state.products.push(...action.payload)
        },
        deleteFromLiked(state, action: PayloadAction<number>) {
            state.likedItems = state.likedItems.filter((obj) => Number(obj.product_id) !== Number(action.payload))
        },
        deleteFromCart(state, action: PayloadAction<number>) {
            state.cartItems = state.cartItems.filter((obj) => Number(obj.product_id) !== Number(action.payload))
        },
        deleteFromProducts(state, action: PayloadAction<number>) {
            state.products = state.products.filter((obj) => Number(obj.id) !== Number(action.payload))
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

export const { fetchData, failureCartData, failureLikedData, failureProductsData, addToCart, addToLiked, addToProducts, deleteFromLiked, deleteFromCart, counterIncrement, counterDecrement } = CartAndLikedSlice.actions
export const CartAndLikedSliceReducer = CartAndLikedSlice.reducer
