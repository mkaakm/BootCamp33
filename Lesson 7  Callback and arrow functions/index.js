// function createUser(name, lastName){
//     const user = {
//         name,
//         lastName,
//         getFullName(){
//             const {name, lastName} = this;
//             return `${name} ${lastName}`
//         }
//     };
//     return user;
// }

// const newUser = createUser('Ivan', 'Drago');
// console.log(newUser);
// console.log(createUser)

// 1. Функція зворотнього порядку

// function createCapitalize(str) {
//           const firstLetter = str[0].toUpperCase();
//           const newStr = `${firstLetter}${str.slice(1)}`;
//           return newStr;
//         }
    
//         function createUser(name, lastName, callback) {
//           const user = {
//             name: callback(name),
//             lastName: callback(lastName),
//             getFullName() {
//               const { name, lastName } = this;
//               return `${name} ${lastName}`
//             }
//           }
    
//           return user;
//         }
    
//         const newUser = createUser("alex", "гийом василь", createCapitalize);
//         console.log(newUser);

// 2. Інлайн колбеки

// function createUser(name, lastName, callback) {
//           const user = {
//             name: callback(name),
//             lastName: callback(lastName),
//             getFullName() {
//               const { name, lastName } = this;
//               return `${name} ${lastName}`
//             }
//           }
//           
//           return user;
//         }

//     const newUser = createUser("Алекс","гийом василь", function(str){
//         const firstLetter = str[0].toUpperCase();
//         return `${firstLetter}${str.slice(1)}`
//     })
//     console.log(newUser)


// 3. Метод forEach
// const items = ['item1','item2','item3'];
// for(let i = 0; i < items.length; i++){
//     console.log(items[i])
// }

// items.forEach(function(elem, index, arr){
//     console.log(elem, index, arr)
// })

// 4. Стрілочні Функції
// let func = (arg1, arg2, ...argN) => expressin

// const isLegal = (age) => age >= 18;
// console.log(isLegal(17));
// console.log(isLegal(19))

// 4.1. Неявне повернення
// const func = function(arg1, arg2, ...argN){
//     return exprassion
// };
// const isLegal = (age) =>{
//     return age >= 18;
// } 
// console.log(isLegal(17));
// console.log(isLegal(19))

// 3.2. Псевдомасив arguments
//   function calcSum() {
//           let sum = 0;
//           for(const value of arguments){
//             sum += value;
//           }
    
//           return sum;
//         }
//         const sum = calcSum(1, 3, 4, 5)
//         console.log(sum);

// const calcSum = () =>{
//     let sum = 0;
//     for(const value of arguments){
//         sum += value;
//     }
//     return sum
// }
// const sum = calcSum(1, 3, 4, 5)
//         console.log(sum);


// const calcSum = (...arr) =>{
//     let sum = 0;
//     for(const value of arr){
//         sum += value;
//     }
//     return sum
// }
// const sum = calcSum(1, 3, 4, 5)
//         console.log(sum);


// function setAlphabet(){
//                 const arr = [];
//                 for(let i = 0; i< arguments.length; i++){
//                     arr[i] = arguments[i]
//                 }
//                 console.log(arr.concat(['f', 'g']));
//             }
//             setAlphabet('a', 'b', 'c', 'd', 'e')


// const setAlphabet = ()=>{
//                 const arr = [];
//                 for(let i = 0; i< arguments.length; i++){
//                     arr[i] = arguments[i]
//                 }
//                 console.log(arr.concat(['f', 'g']));
//             }
//             setAlphabet('a', 'b', 'c', 'd', 'e')

// const setAlphabet = (...arr)=>{
//     //             const newArr = [];

//     //             for(let i = 0; i< arr.length; i++){
//     //                 arr[i] = arr[i]
//     //             }


//                 console.log(arr.concat(['f', 'g']));
//             }
//             setAlphabet('a', 'b', 'c', 'd', 'e')

    // const array = ['a', 'b', 'c', 'd', 'e']
    // //   const newArr = [];
    // array.forEach((elem, index, arr)=>{
    //     console.log(elem)
    //     console.log(index)
    //     console.log(arr)
    // })



// function setAlphabet(){
//                 const arr = [];
//                 for(let i = 0; i< arguments.length; i++){
//                     arr[i] = arguments[i]
//                 }
//                 console.log(arr.concat(['f', 'g']));
//             }
//             setAlphabet('a', 'b', 'c', 'd', 'e')


//     const setAlphabet = (...arr) =>{
//         const newArr = [];
//         arr.forEach(item => newArr.push(item));
//         console.log(newArr.concat(['f', 'g']))
//     }
//     setAlphabet('a', 'b', 'c', 'd', 'e')

    // const calcSum = (...arr) =>{
//     let sum = 0;
//     for(const value of arr){
//         sum += value;
//     }
//     return sum
// }
// const sum = calcSum(1, 3, 4, 5)
//         console.log(sum);

// const calcSum = (...arr) =>{
// let sum = 0;
// arr.forEach(item => sum += item);
// return sum;
// }
// const sum = calcSum(1, 3, 4, 5)
//         console.log(sum);


// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   function getAllPropValues(propName) {
//     let valueArray = [];
//     for (const product of products) {
//       if (product[propName]) {
//         valueArray.push(product[propName]);
//       }
//     }
//     return valueArray;
//   }
//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("quantity"));
//   console.log(getAllPropValues("price"));
//   console.log(getAllPropValues("category"));




// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const getAllPropValues = (propName) =>{
//     const result =[];
//     products.forEach(product =>{
//         if(product[propName]){
//             result.push(product[propName])
//         }
//     });
//     return result
//   }

//   console.log(getAllPropValues("name"))
//   console.log(getAllPropValues("price"))
//   console.log(getAllPropValues("quantity"))
//   console.log(getAllPropValues("category"))

// 3.3. Стрілочні функції як колбеки

// const items = ['item1','item2','item3']
// items.forEach((elem) => console.log(elem))


// const values = [1,2,3,4]
// let result = 0;
// for(let i = 0; i < values.length; i++){
//     result += values[i] ** 2
// }
// console.log(result)

// const values = [1,2,3,4]
// const getSumSquare = (arr) => arr.reduce((acc, value) => acc + value ** 2, 0) 
// const result = getSumSquare(values)
// console.log(result)

// 4. Декілька колбеків

/*
? Додайте об'єкту  account  методи для
? withdraw(amount, onSuccess, onError)
? і deposit(amount, onSuccess, onError),
? де перший параметр це сума операції,
? а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? якщо amount більше this.balance
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? інакше знімаємо гроші з балансу і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо
? amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   userName: 'Kolya',
//   balance: 0,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//       return;
//     }

//     if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`Account balance: ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//       return;
//     }
//     if (amount === this.balance) {
//       onError(`Amount must be more than 0 credits`);
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`Account balance: ${this.balance}`);
//   },
// };

// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(700, handleSuccess, handleError);
// account.deposit(900, handleSuccess, handleError);