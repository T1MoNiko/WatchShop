import "./likedProducts.css"

import React from "react"
import { useSelector } from "react-redux"

import { LikeCard } from "../../components/LikeCard"
import { RootState } from "../../redux/store"
import BtnBack from "../../components/btnBack/BtnBack"


const LikedPage: React.FC = () => {

    const  { likedItems } = useSelector((state: RootState) => state.CartAndLikedSliceReducer)
    
    return (
        <>
            <BtnBack/> 
            {likedItems.length ? 
            <div className="wrapper-liked">
                {likedItems.map((product, key) => {
                    return <LikeCard {...product} key={key} />
                })}
            </div> : 
            <div>
                <h1 className="nothing-in-liked">
                    You don't have any products added to your favorites <br/>
                    😐<br/>
                    add something to make products appear
                </h1>
            </div>}
        </>
    )
}

export default LikedPage;