// Цикл while
// let i = 0
// while(i<3){
//     console.log(i);
//     i++
// }

// let weight = prompt('Введіть вашу вагу')
// if(weight < 0){
//     weight = prompt("Введіть вагу. Вага не може бути менше 0")
// }
// console.log(`Ваша вага у фунтах ${weight/0.453}`)

// let weight = prompt('Введіть вашу вагу')
// while(weight < 0){
//     weight = prompt("Введіть вагу. Вага не може бути менше 0")
// }
// console.log(`Ваша вага у фунтах ${weight/0.453}`)

// Цикл do … while

// let weight = 0
// do{
//     weight = prompt("Введіть вагу")
// }
// while(weight < 0){
//     console.log(`Ваша вага у фунтах ${weight/0.453}`)
// }

// Цикл for
// for(let i = 0; i<3; i+=1){
//     alert(i)
// }

// Як воно працює:
// Виконати початок  let i = 0
// → (Якщо умова == true → Виконати тіло, Виконати крок) записати 0
// → (Якщо умова == true → Виконати тіло, Виконати крок) записати 1
// → (Якщо умова == true → Виконати тіло, Виконати крок) записати 2
// → ... Зупинити виконання так як I = 3 це не підходить нам так як ми до 3 дивимось. Тобто отримуємо  false.

// Уявіть ситуацію що людині треба заповнити анкету ми питаємо в нього чи готовий він розпочати ? 
// Якщо він натиская ОК у змінну answer зберігається true і в середині блоку if за допомогою циклу for ми виводимо зворотній відлік.

// const answer = confirm('Готові заповнити анкету?');
// if(answer){
// for(let i = 3; i>0; i-=1){
//     alert(i)
// }
//     const name = prompt("Введіть ваше імя")
//     const lastName = prompt("Ведіть ваше прізвище");
//     const middleName = prompt("Введіть по батькові");
// 	const result = `${name}  ${lastName} ${middleName}`
// 	alert(result)
// }
// Оператор break
// let userName = prompt("Введіть імя");

// while(!userName) {
//     userName = prompt("Ведите не пустое имя");
//     if(userName === null) {
//         break;
//     }
// }
// if(userName) {
//     console.log(`Добро пожаловать, ${userName}`);
// }
// else {
//     console.log("Не очень то и хотелось")
// }

// Оператор continue
// const floor = +prompt('Введіть ваш поверх');
// for(let i = 0; i <= floor; i++){
//     if(i === 4){
//         console.log('Немає поверху');
//         continue;
//     }
//     console.log(`${i} поверх`)
// }
// console.log("Ваш поверх")