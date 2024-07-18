export const totalPrice = (items) => {
    const price = items.reduce((sum, next) => Number(sum) + Number(next.price) * next.count, 0)
    return price
}