// 1. глобальна область видимості
// const a = 42
// console.log(a)
// function wrap(){
//     const b = a
//     console.log(b)
// }
// wrap()
// 2. блокова область видимості
// const a = 42
// console.log(a)
// if(true){
//     const b = 43;
//     console.log(a)
//     console.log(b)
// }
// console.log(b)
// 3. Пошук за люнцюжком областей видимості

// let a = 5;
// let b = 8;
// let c = 20;

// function fnA(){
//     a = 7;
//     let b = 11;
//     b = 13;
//     function fnB(){
//         let c = 25;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     fnB()
// }
// fnA()