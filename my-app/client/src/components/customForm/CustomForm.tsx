import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../formInput/FormInput";
import { Validation } from "./types";
import styles from "./customForm.module.scss"
import axios, { AxiosResponse } from "axios";
import { instance } from "../../utils/axiosConfig";
import { formData } from "../../utils/formData";
import { RootState, useAppDispatch } from "../../redux/store";
import { setAuth } from "../../redux/PrivatOfficeSlice/PrivatOfficeSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CustomForm = () => {
    const [isRegistration, setIsRegistration] = useState(true);
    const { register, handleSubmit, formState } = useForm<Validation>({
        mode: "onSubmit"
    })
    const history = useNavigate()
    const isAuth = useSelector((state: RootState) => state.AccountReducer.isAuth)
    const data = formData(formState),
          dispatch = useAppDispatch()

    useEffect(() => {
        if (isAuth) {
            history('/')
        }
    }, [isAuth])

    const onSubmitReg = async (formData: Validation) => { 
        // try {
        //     const {data}: {data: Validation} = await axios.post('http://localhost:5000/user', formData)
        //     const token: AxiosResponse | null = data ? await axios.post('http://localhost:5000/auth/login', 
        //                                             {email: data.email, password: formData.password}) : null

        //     console.log(token)
        //     if (token?.data.access_token) {
        //         await axios.post('http://localhost:5000/cookies', {"access_token": token.data.access_token}, { withCredentials: true })
        //         await axios.get('http://localhost:5000/cookies')
        //     }
        // } catch(err) {
        //     console.log(err)
        // }

        try {
            const {data}: {data: Validation} = await axios.post('http://localhost:5000/user', formData)
            const token: AxiosResponse | null = data ? await axios.post('http://localhost:5000/auth/login', 
                                                    {email: data.email, password: formData.password}) : null
            if (token?.data.access_token && typeof window !== 'undefined') {
                localStorage.setItem('access_token', token.data.access_token)
                dispatch(setAuth(true))
                history('/')
                
            }
        } catch(err) {
            console.log(err)
        }
    }

    const onSubmitLog = async (formData: Omit<Validation, 'firstName' & 'secondName'>) => {
        const { data } = await axios.post('http://localhost:5000/auth/login', formData)
        if (typeof window !== undefined) {
            localStorage.setItem('access_token', data.access_token)
            dispatch(setAuth(true))
            history('/')
        };
    }


    return (
        <>
            <form onSubmit={handleSubmit(isRegistration ? onSubmitReg : onSubmitLog)} className={styles.form}>
                <h1>{isRegistration ? "Registration" : "Login"}</h1>
                <div className={styles.inputBox}>
                {isRegistration ? data.regData.map((item, i) => (
                    <FormInput 
                        key={i}
                        type={item.type} 
                        placeholder={item.placeholder}
                        register={register} 
                        error={item.error}
                        fieldName={item.fieldName}
                        options={item.options}
                    />
                )) : data.loginData.map((item, i) => (
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
                </div>
                <p onClick={() => setIsRegistration(!isRegistration)}>{isRegistration ? "Login" : "Register"}</p>
                
                <button type="submit">{isRegistration ? "Register" : "Login"}</button>
            </form>
        </>
    );
}
 
export default CustomForm;