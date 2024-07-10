import "./regPage.css"

import { Link } from "react-router-dom";
import React from "react";

import { CustomForm } from "../../components/Form";

const RegPage: React.FC = () => {
    return (
        <section>
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
            <CustomForm/>
        </section>
    )
}

export default RegPage;