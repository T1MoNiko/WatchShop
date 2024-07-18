import { StateData } from "../redux/PrivatOfficeSlice/types"


export const getDataFromLSAP = () => {
    const dataLS = localStorage.getItem("account")
    const { ...data } = dataLS ? JSON.parse(dataLS) : {
                firstName: "",
                lastName: "",
                password: "",
                email: "",
                account: false,
                imageUrl: "./img/iconAccountImgEmpty.png"
            } 
    return {
        data: data as StateData
    }
}