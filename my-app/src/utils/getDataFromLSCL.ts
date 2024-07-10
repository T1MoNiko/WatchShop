import { Products } from "../redux/CartSlice/types"

export const getDataFromLSCL = () => {
    const data = localStorage.getItem("cartAndLiked")
    console.log(data)
    const {cartItems, likedItems} = data ? JSON.parse(data) : {cartItems: [], likedItems: []}
    return {
        cartItems: cartItems as Products[],
        likedItems: likedItems as Products[]
    }
}