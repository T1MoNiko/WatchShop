import "./likedProducts.css"

import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { LikeCard } from "../../components/LikeCard"
import { RootState } from "../../redux/store"


const LikedPage: React.FC = () => {

    const  { likedItems } = useSelector((state: RootState) => state.CartAndLikedSliceReducer)
    
    return (
            <>
            <Link to="/">
                <div id="arrowAnim">
                    <div className="arrowSliding">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay1">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay2">
                        <div className="arrow"></div>
                    </div>
                    <div className="arrowSliding delay3">
                        <div className="arrow"></div>
                    </div>
                </div>
            </Link>
                
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