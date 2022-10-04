// 1. Rest параметр.

// Приклад 1
// Давайте напишемо функцію, яка отримує кілька оцінок, та повертає середню оцінку.
// function calcAvarageScore (...arr){
//     let sum = 0;
//     for(const value of arr){
//         sum += value;
//     }
//     const result = sum/arr.length;
//     return result;
// }
// const avarageScore = calcAvarageScore(4,7,12,6,11);
// console.log(avarageScore)
// 1.2.  rest: збирання частини аргументів функції
// Давайте напишемо функцію, яка вираховує, чи можна людину перевести на наступний курс.

// function isNextCourse (minAvargeScore,...arr){
//     let sum = 0;
//     for(const value of arr){
//         sum += value;
//     }
//     const avarageScore = sum/arr.length;
//     const result = avarageScore >= minAvargeScore
//     return result;
// }
// const isNext = isNextCourse(6,4,7,12,6,11);
// console.log(isNext)