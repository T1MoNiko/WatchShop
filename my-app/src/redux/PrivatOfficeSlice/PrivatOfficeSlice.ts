import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChangeInfo, OfficeState, StateData } from "./types";
import { getDataFromLSAP } from "../../utils/getDataFromLSAP";

const initialState: OfficeState = getDataFromLSAP()

const Account = createSlice({
    name: "account",
    initialState,
    reducers: {
        createAccount(state, action: PayloadAction<StateData>) {
            state.data = action.payload
        },
        changeInfo(state, action: PayloadAction<ChangeInfo>) {
            state.data = {...state.data, ...action.payload}
        },
        signOutAccount(state, action: PayloadAction<undefined>) {
            state.data = {
                firstName: "",
                lastName: "",
                password: "",
                email: "",
                account: false,
            }
        }
    }
})

export const { createAccount, signOutAccount, changeInfo } = Account.actions;
export const AccountReducer = Account.reducer;