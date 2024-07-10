
export type Products = {
    id: number,
    title: string,
    price: number,
    imageUrl: string 
}
export type CartState = {
    cartItems: Products[],
    likedItems: Products[],
    // status: string
}
