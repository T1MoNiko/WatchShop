import "./regPage.css"

import React from "react";

import CustomForm from "../../components/customForm/CustomForm";
import BtnBack from "../../components/btnBack/BtnBack";

const RegPage: React.FC = () => {
    return (
        <section>
            <BtnBack/>
            <CustomForm/>
        </section>
    )
}

export default RegPage;