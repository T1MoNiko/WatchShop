import { Products } from "../redux/ProductsSlice/types"


export const getDataFromLSCL = () => {
    const data = localStorage.getItem("cartAndLiked")
    const {cartItems, likedItems} = data ? JSON.parse(data) : {cartItems: [], likedItems: []}
    return {
        cartLoading: false,
        likedLoading: false,
        cartItems: cartItems as Products[],
        likedItems: likedItems as Products[],
        error: null
    }
}