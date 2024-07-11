import { Link } from "react-router-dom"
import React from "react"

import "./btnBack.css"

const BtnBack: React.FC = () => {
    return (
        <Link to="/">
            <svg className="btn-back" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="40px" height="40px" fill="white" viewBox="0 0 306 306" xmlSpace="preserve">
                <g>
                    <g id="chevron-left">
                        <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153"/>
                    </g>
                </g>
            </svg>
        </Link>
    )
}

export default BtnBack;