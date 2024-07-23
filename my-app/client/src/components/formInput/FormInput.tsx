import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormFields } from "../customForm/types";
import styles from "./formInput.module.scss"

const FormInput: React.FC<FormFields> = ({error, register, type, placeholder, options, fieldName}) => {
    return (
        <>
            <input 
                type={type}
                placeholder={placeholder}
                {...register(fieldName, options)}
                className={styles.formInput}  
                autoComplete="false"
                />
            {
                error && <p className={styles.formErrorText}>{error}</p>
            }
        </>
    );
}
 
export default FormInput;

