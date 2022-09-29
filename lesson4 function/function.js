// 1. Оголошення функції
    // let userName = prompt("Введите имя");
    // while(userName.length < 2) {
    // userName = prompt("В імені повинно бути 2 або більше сиволів")
    // }
    // let userLastName = prompt("Введите фамилию");
    // while(userLastName.length < 2) {
    // userLastName = prompt("В призвищі повинно бути 2 або більше сиволів");
    // }
    // console.log(`Доброго дня ${userName} ${userLastName}`)
// Function deaclaration

// function testFunction(){
//     const x =5;
//     const y =10;
//     console.log(x+y)
// }
// testFunction();
// testFunction();
// testFunction();
// testFunction();
// Function expration
// const testFunction = function(){
//     const x =5;
//     const y =10;
//     console.log(x+y)
// }
// testFunction();
// testFunction();
// testFunction();
// testFunction();

// 2. Параметри та аргументи функції
// function testFunction(x,y){ - Параметри функції
//     console.log(x*y)
// }
// testFunction(2,5); - Аргументи функції

// 3. Повернення значення
// function returnResult(a,b,c){
//     const result = a+b*c
//     return result
// }
// const result = returnResult(5,10,2)
// console.log(result)

// function min(a,b){
//     return a<b?a:b;
// }
// console.log(min(2,5))
// console.log(min(3,-1))
// console.log(min(1,1))
//   function isName (name){
//                 return name.length < 2;
//             }
//             let userName = prompt("Введите имя");
//             while(isName(userName)) {
//                 userName = prompt("В імені повинно бути 2 або більше символів")
//             }
//             let userLastName = prompt("Введите фамилию");
//             while(isName(userLastName)) {
//                 userLastName = prompt("В прізвищі повинно бути 2 або більше символів");
//             }
//             console.log(`Доброго дня ${userName} ${userLastName}`)
    


// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.


// 4. Порядок виконання коду
// function returnResult(a, b, c){
//         const result = a + b * c
//         return result
//     }
//     console.log("Виводить перед початком функції 1");
//     const result = returnResult(5, 10, 2)
//     console.log(result)
//     console.log("Виводить перед початком функції 2");
//     const result2 = returnResult(10, 11, 7)
//     console.log(result2)
//     console.log("Виводить після виконання функції");

// 5. Параметри за замовчуванням.
// function multiply(a,b = 1){
//     return a*b
// }
// console.log(multiply(5,2));
// console.log(multiply(5))
// console.log(multiply(5, undefined))
// 6. Псевдомасив arguments
// function showName(){
//     console.log(arguments.length)
//     console.log(arguments[0])
//     console.log(arguments[1])
// }
// // showName("Юлій","Цезар")
// showName("Юлій")

// function calcSum(){
//     let sum = 0;
//     for(const num of arguments){
//         sum += num;
//     }
//     return sum;
// }
// const result1 = calcSum(1,2,3,4,7)
// console.log(result1)

// 7. Перетворення псевдомасиву
// Araay.from()
// function arr(){
//     // змінна args буде містити повноцінний масив
//     const args = Array.from(arguments);
//     console.log(args)
// }
// arr('Юлій', "Цезар", "Індіана Джонс")

//2) rest(...)
// function arr(...args){
//     // змінна args буде містити повноцінний масив
//     console.log(...args)
// }
// arr('Юлій', "Цезар", "Індіана Джонс")
// 8. Паттерн “Раннє повернення”

// const getCurrency = (currencyName) =>{
//     let result = 0;
//     switch(currencyName){
//         case "usd":
//             result = 41.6;
//             break
//         case "euro":
//             result = 40.3
//             break
//             return result    
//     }
// }

// const getCurrency = (currencyName) =>{
//     console.log(result)
//     switch(currencyName){
//         case "usd":
//         return 41.6;
//         case "euro":
//         return 40.3
//     }
// }


// 9. Функціональний вираз
// const sum = function testFunction(){
//     const x = 5;
//     const y = 10;
// }
//    console.log(sum)

// const maxNumber = getMaxValue(3,7,6);
// console.log(maxNumber);
// // const kievSquare = calcCircleAerea(20);
// const calcCircleAerea = function(radius){
//     const circleArea = 3.1516926 * (radius **2);
//     return circleArea
// }
// const kievSquare = calcCircleAerea(20);
// console.log(kievSquare);

// function getMaxValue(value1, value2,value3){
//     if(value1 > value2 && value1 > value3){
//         return value1
//     }
//     else if(value2 > value1 && value2 > value3){
// return value2
//     }else{
//         return value3
//     }
// }