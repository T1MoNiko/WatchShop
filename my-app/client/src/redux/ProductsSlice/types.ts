
export type Products = {
    id: number,
    name: string,
    price: number,
    img: string ,
    product_id?: number,
    count?: number,
    isCatalogProduct?: boolean,
    isSeasonProduct?: boolean
}
export type CartState = {
    products: Products[],
    cartItems: Products[],
    likedItems: Products[],
    cartLoading: boolean,
    likedLoading: boolean,
    productsLoading: boolean,
    cartError: null | unknown,
    likedError: null | unknown,
    productsError: null | unknown
}
