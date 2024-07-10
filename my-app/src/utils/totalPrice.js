export const totalPrice = (item) => {
    const price = item.reduce((sum, next) => Number(sum) + Number(next.price), 0)
    return price
}