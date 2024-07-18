import React from "react";
import { RegisterOptions, UseFormRegister, useForm } from "react-hook-form";
import FormInput from "../formInput/FormInput";
import { FormFields, Validation } from "./types";
import styles from "./customForm.module.scss"

const CustomForm = () => {
    const { register, handleSubmit, formState } = useForm<Validation>({
        mode: "onSubmit"
    })
          

    const onSubmit = (data: Validation) => { 
        console.log(data)
    }

    const formFieldsInfo: Omit<FormFields, 'register'>[] = [
        {
            type: "text",
            placeholder: "Enter first name",
            error: formState.errors['firstName']?.message,
            fieldName: "firstName",
            options: {
                required: "This field is required",  
                maxLength: 50
            }
        },
        {
            type: "text",
            placeholder: "Enter second name",
            error: formState.errors['secondName']?.message,
            fieldName: "secondName",
            options: {
                required: "This field is required", 
                maxLength: 50
            }
        },
        {
            type: "email",
            placeholder: "Enter email",
            error: formState.errors['email']?.message,
            fieldName: "email",
            options: {
                required: "This field is required", 
                pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid email"
                }}
        },
        {
            type: "password",
            placeholder: "Enter password",
            error: formState.errors['password']?.message,
            fieldName: "password",
            options: {
                required: "This field is required", 
                minLength: {value: 8, message: "Password should consist minimum of 8 characters"}
            }
        }
]

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h1>Registration</h1>
                {formFieldsInfo.map((item, i) => (
                    <FormInput 
                        key={i}
                        type={item.type} 
                        placeholder={item.placeholder}
                        register={register} 
                        error={item.error}
                        fieldName={item.fieldName}
                        options={item.options}
                    />
                ))}
                
                <button type="submit">Register</button>
            </form>
        </>
    );
}
 
export default CustomForm;