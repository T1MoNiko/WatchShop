import "./brands.scss"

import React from "react"

const Brands: React.FC = () => {
    return (
        <section className="container-for-brands-part">
            <div className="brand-container">
                <p className="title-brand">НАШИ БРЕНДЫ</p>
                <div className="line"></div>
                <div className="brands-icons">
                    <img src={"./img/iconBrand.png"} alt="" className="brand-icon" />
                    <img src={"./img/iconBrand.png"} alt="" className="brand-icon" />
                    <img src={"./img/iconBrand.png"} alt="" className="brand-icon" />
                    <img src={"./img/iconBrand.png"} alt="" className="brand-icon" />
                </div>
            </div>     
        </section>
    )
}

export default Brands;