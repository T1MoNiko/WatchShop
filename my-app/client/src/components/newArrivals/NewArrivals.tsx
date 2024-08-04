import "./newArrivals.css"

import React from "react"

import { ProductCard } from "../product/ProductCard"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const NewArrivals: React.FC = () => {
    const catalogProducts = useSelector((state: RootState) => state.CartAndLikedSliceReducer.products
                                                .filter(item => item.isCatalogProduct && !item.isSeasonProduct))
    
    return (
        <div className="newArrivals" uk-scrollspy="cls:uk-animation-fade">
            <p className="arrivals-title" id="New">НОВЫЕ ПОСТУПЛЕНИЯ</p>
            <div className="line"></div>
            <div className="container-wrapper" uk-scrollspy="cls: uk-animation-fade; delay: 500">
            {catalogProducts ? catalogProducts.map((item, i) => {
                return <ProductCard 
                    key={item.id} 
                    name={item.name} 
                    id={item.id} 
                    img={item.img} 
                    price={item.price}/>
            }) : null}
            </div>
        </div>
    )
}

export default NewArrivals;