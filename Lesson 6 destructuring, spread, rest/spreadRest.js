// 1. Синтаксис spread і rest
// Приклад 1
// const houses = ["Грейджои", "Баратеоны", "Мартеллы", "Старки", "Аррены", "Тиреллы", "Таргариены"];
// console.log(houses)
// console.log(...houses)

// Приклад 2
// const maxValue = Math.max(1,5,7)
// console.log(maxValue)
// const minValue = Math.min(1,5,7)
// console.log(minValue)

// const sallaries = [1000, 2000, 3000, 5000, 10000]
// const minSallary = Math.min(...sallaries)
// const maxSallary = Math.max(...sallaries)
// console.log(minSallary)
// console.log(maxSallary)
// Приклад 3
// const admins = ["Repeta", "Olegio", "SuperAdmin"];
// const visitors = ["Alex", "Vika", "N124Z"];
// // const users = admins.concat(visitors)
// const users = [...admins, ...visitors]
// console.log(users)
// Приклад 4
// const address = {
//     street: "Shevchenka",
//     house: 15,
//     apartment: 177,
//     city: "Odessa",
// }
// const fullAddress = {...address, city: 'Lviv', conuntry: "Ukrain"}
// console.log(fullAddress)
// Приклад 5
// const houses = ["Грейджои", "Баратеоны", "Мартеллы", "Старки", "Аррены", "Тиреллы", "Таргариены"];
// const housesCopy = [];
// for(const value of houses){
//     housesCopy.push(value)
// }
// console.log(housesCopy)


const houses = ["Грейджои", "Баратеоны", "Мартеллы", "Старки", "Аррены", "Тиреллы", "Таргариены"];
const housesCopy = [...houses]
console.log(housesCopy)