export type StateData = {
    firstName: string,
    lastName: string,
    password: string,
    email: string,
    account: boolean,
    imageUrl?: string | ArrayBuffer
}
export type OfficeState = {
    data: StateData
}
export type ChangeInfo = {
    firstName: string,
    lastName: string,
    imageUrl?: string | ArrayBuffer
}