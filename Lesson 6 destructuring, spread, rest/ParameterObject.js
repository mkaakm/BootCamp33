// 1. Патерн «Об'єкт параметрів»

// function calcTotalPrice(product){
//     const totalPrice = product.price * product.quantity
//     return totalPrice
//     }
//     const notebooks = {
//         price: 1000,
//         quantity: 4,
//         name: 'Lenovo'
//     }
//     console.log(calcTotalPrice(notebooks));

// function calcTotalPrice(product){
//     const {price, quantity} = product
//     const totalPrice = price * quantity
//     return totalPrice
//     }
//     const notebooks = {
//         price: 1000,
//         quantity: 4,
//         name: 'Lenovo'
//     }
//     console.log(calcTotalPrice(notebooks));

// function calcTotalPrice({price, quantity}){
//     const totalPrice = price * quantity
//     return totalPrice
//     }
//     const notebooks = {
//         price: 1000,
//         quantity: 4,
//         name: 'Lenovo'
//     }
//     console.log(calcTotalPrice(notebooks));