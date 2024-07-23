import { FormState } from "react-hook-form"
import { FormFields, Validation } from "../components/customForm/types"

interface FormData {
    regData: Omit<FormFields, 'register'>[], 
    loginData: Omit<FormFields, 'register'>[]
}

export const formData = (formState: FormState<Validation>): FormData => {
    return {
        regData: [
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
                error: formState.errors['lastName']?.message,
                fieldName: "lastName",
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
        ],
        loginData: [
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
    }
}