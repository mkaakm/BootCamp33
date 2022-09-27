// Уявимо собі що людина хоче порахувати свою зарплату за місяць
//  і вводить зарплату за день перше що вона вводить зарплату за день, а 2 місяць за який вона хоче порахувати зарплату.
// const sallaryPerDay = prompt("Введіть зарплату за день")
// const month = prompt("Введіть місяць")
// let sallaryPerManth = 0
// if(month === "Січень"){
//     sallaryPerManth = 23*sallaryPerDay
// }else if(month === "Лютий"){
//         sallaryPerManth = 20 *  sallaryPerDay
//         }else if(month === "Березень"){
//         sallaryPerManth = 23 *  sallaryPerDay
//         }else if(month === "Квітень"){
//         sallaryPerManth = 22 *  sallaryPerDay
//         }else if(month === "Травень"){
//         sallaryPerManth = 23 *  sallaryPerDay
//         }else if(month === "Червень"){
//         sallaryPerManth = 22 *  sallaryPerDay
//         }else if(month === "Липень"){
//         sallaryPerManth = 23 *  sallaryPerDay
//         }else if(month === "Серпень"){
//         sallaryPerManth = 23 *  sallaryPerDay
//         }else if(month === "Вересень"){
//         sallaryPerManth = 22 *  sallaryPerDay
//         }else if(month === "Жовтень"){
//         sallaryPerManth = 23 *  sallaryPerDay
//         }else if(month === "Листопад"){
//         sallaryPerManth = 22 *  sallaryPerDay
//         }else if(month === "Грудень"){
//         sallaryPerManth = 23 *  sallaryPerDay
//         }
//         console.log(sallaryPerManth)



// Як це зробити легше через switch
// const sallaryPerDay = prompt("Введіть зарплату за день")
// const month = prompt("Введіть місяць")
// let sallaryPerManth = 0
// switch(month){
//     case "Січень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Лютий":
//     sallaryPerManth = 20 * sallaryPerDay
//     break
//     case "Березень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Квітень":
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case "Травень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Червень":
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case "Липень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Серпень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Вересень":
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case "Жовтень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break
//     case "Листопад":
//     sallaryPerManth = 22 * sallaryPerDay
//     break
//     case "Грудень":
//     sallaryPerManth = 23 * sallaryPerDay
//     break;
//     default: 
//     alert ("Немає такого місяця")
//     }
//     
//     alert(`Заплата людини за місяць ${month} ${sallaryPerManth}`)

// const sallaryPerDay = prompt("Введіть зарплату за день")
// const month = prompt("Введіть місяць")
// let sallaryPerManth = 0
// switch(month){
//     case "Січень":
//     case "Березень":
//     case "Травень":
//     case "Липень":
//     case "Серпень":
//     case "Жовтень":
//     case "Грудень":
//         sallaryPerManth = 23 * sallaryPerDay
//         break

//     case "Лютий":
//         sallaryPerManth = 20 * sallaryPerDay
//         break

//     case "Квітень":
//     case "Червень":
//     case "Вересень":
//     case "Листопад":
//         sallaryPerManth = 22 * sallaryPerDay
//         break
//         default:
//             alert("Немає такого місяця")
// }
// console.log(sallaryPerManth)