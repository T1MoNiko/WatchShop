import "./newArrivals.css"

import React from "react"
import { useState, useEffect } from "react"

import { ProductCard } from "../product/ProductCard"
import { Products } from "../../redux/CartSlice/types"

const NewArrivals: React.FC = () => {
    const [res, setRes] = useState<Products[]>([]);

    useEffect(() => {
        const Response = async () => {
            try {
                await fetch("/products.json").then(res => {return res.json()}).then(res => setRes(res))
            }
            catch (ex) {
                if (ex instanceof Error) {
                    console.log(`Произошла ошибка: ${ex.name} \nПодробнее: ${ex.message}`) 
                }
            }
        }
        Response()
    }, [])
    
    return (
        <div className="newArrivals" uk-scrollspy="cls:uk-animation-fade">
            <p className="arrivals-title" id="New">НОВЫЕ ПОСТУПЛЕНИЯ</p>
            <div className="line"></div>
            <div className="container-wrapper" uk-scrollspy="cls: uk-animation-fade; delay: 500">
            {res ? res.map((item, i) => {
                return <ProductCard title={item.title} key={i} id={item.id} imageUrl={item.imageUrl} price={item.price}/>
            }) : null}
            </div>
        </div>
    )
}

export default NewArrivals;