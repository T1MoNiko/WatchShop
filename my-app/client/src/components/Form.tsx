import "../pages/RegPage/regPage.css"

import React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { createAccount } from "../redux/PrivatOfficeSlice/PrivatOfficeSlice"

export const CustomForm: React.FC = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        check: false,
        account: true,
        imageUrl: "./img/iconAccountImgEmpty.png"
    })
    
    const dispatch = useDispatch()
    
    
    
    const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.name === "email") {
                setState(prev => {return {...prev, email: event.target.value}})
            } else if (event.target.name === "password") {
                setState(prev => {return {...prev, password: event.target.value}})
            } else if (event.target.name === "checkbox") {
                setState(prev => {return {...prev, check: event.target.checked}})
            } else if (event.target.name === "firstName") {
                setState(prev => {return {...prev, firstName: event.target.value}})
            } else if (event.target.name === "lastName") {
                setState(prev => {return {...prev, lastName: event.target.value}})
            } else {
                console.log('err')
            }
    
}

    return (
      <div className="registration-box">
        <h1 className="registration-box__title">Registration</h1>
        <input
          id="firstName"
          name="firstName"
          type="firstName"
          autoComplete="off"
          onChange={updateValue}
          className="registration-box__input"
          placeholder="First name"
        />
        {state.firstName.length <= 1 && state.firstName.trim().length > 0 ? 
        <div className="registration-box__input-error">Obligatory field</div> 
        : null}
      
        <input
          id="lastName"
          name="lastName"
          type="lastName"
          autoComplete="off"
          onChange={updateValue}
          className="registration-box__input"
          placeholder="Last name"
        />
        {state.lastName.length <= 1 && state.lastName.trim().length > 0 ? 
        <div className="registration-box__input-error">Obligatory field</div> 
        : null}
        {state.lastName.length > 30 ? 
        <div className="registration-box__input-error">Obligatory field</div> 
        : null}
      
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          onChange={updateValue}
          className="registration-box__input"
          placeholder="Email address"
        />
        {state.email.slice(-10) !== "@gmail.com" && state.email.trim().length > 0 ? 
        <div className="registration-box__input-error">Invalid mail entered(Example: example543.gmail.com)</div> 
        : null}
      
        <input
          id="password"
          name="password"
          type="text"
          autoComplete="off"
          onChange={updateValue}
          className="registration-box__input"
          placeholder="•••••"
        />
        {state.password.length < 8 && state.password.trim().length > 0 ? 
        <div className="registration-box__input-error">Password must contain at least 8 characters</div> 
        : null}
      
        <div className="registration-box__checkbox-container">
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            autoComplete="off"
            onChange={updateValue}
            className="registration-box__checkbox"
            placeholder=""
          />
          <p className="registration-box__checkbox-label">I agree with the privacy policy</p>
        </div>
      
        {
          state.check && state.email.slice(-10) === "@gmail.com" && state.password.length >= 8 
          && state.firstName.length > 1 && state.firstName.length < 30 && state.lastName.length > 1 
          && state.lastName.length < 30 ? 
          <Link to="/"><button className="registration-box__submit-btn_active" type="submit" onClick={() => dispatch(createAccount(state))}>Create account</button></Link>
          : 
          <button className="registration-box__submit-btn_disabled" disabled type="submit">Create account</button>
        }
    </div>
    )
}