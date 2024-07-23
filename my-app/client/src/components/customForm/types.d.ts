import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface Validation {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface FormFields {
    error: string | undefined;
    register: UseFormRegister<Validation>;
    type: string;
    placeholder: string;
    options: RegisterOptions<Validation>;
    fieldName: "email" | "password" | "firstName" | "lastName";
}