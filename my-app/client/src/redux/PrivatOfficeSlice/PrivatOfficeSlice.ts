import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChangeInfo, OfficeState, StateData } from "./types";

interface IsAuth {isAuth: boolean}

const initialState: IsAuth = {
    isAuth: false
}

const Account = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAuth (state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        }
    }
})

export const { setAuth } = Account.actions;
export const AccountReducer = Account.reducer;