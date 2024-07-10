import "./products.css"

import React from "react"

import { useState, useEffect } from "react"

import { ProductCard } from "../ProductCard"

import { Products } from "../../redux/CartSlice/types"

const ProductsPart: React.FC = () => {
    const [res, setRes] = useState<Products[]>([]);

    useEffect(() => {
        const Response = async () => {
            try {
                await fetch("/season.json").then(res => {return res.json()}).then(res => setRes(res))
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
        <div className="products-section">
            <div className="products-line" uk-scrollspy="cls: uk-animation-slide-right; delay: 500">
                <div className="products-part">
                    <p className="title-season">СЕЗОН 2020/21</p>
                    <div className="line"></div>
                    <div className="products-items">
                        {res.map((item, i) => {
                           return <ProductCard title={item.title} key={i} id={item.id} imageUrl={item.imageUrl} price={item.price}/>
                        })}
                    </div>
                </div>
                <div className="new-colaction">
                    <p className="new-colaction-text">НОВАЯ КОЛЛЕКЦИЯ</p>
                    <div className="line"></div>
                    <button className="catalog-btn"><a href="#New">КАТАЛОГ</a></button>
                </div>
            </div>  
            <div className="products-line" uk-scrollspy="cls: uk-animation-slide-left; delay: 500">
                <img src={"./img/pic2.png"} alt="" className="pic2" />
                <div className="colaction2018">
                    <p className="colaction-title">КОЛЛЕКЦИЯ 2018</p>
                    <div className="line"></div>
                    <p className="colaction-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. 
                    </p>
                    <button className="transition-on-colaction">ПОСМОТРЕТЬ КОЛЛЕКЦИЮ</button>
                </div>
            </div>  
        </div>
                
    )
}

export default ProductsPart;