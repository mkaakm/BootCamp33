// Створення
// let userInfo = new Object;

// const userInfo = {
//     name:'Микола',
//     age: 30,
//     "likes javascript":true,
// }
// console.log(userInfo)
// console.log(userInfo.name)
// console.log(userInfo['name'])
// console.log(userInfo["likes javascript"])

//Вкладені вслаті
// const propertyName = 'likes javascript';
// const userInfo = {
//     name:'Микола',
//     age: 30,
//     'likes javascript':propertyName,
//     adress:{
//         city:'Odessa',
//         street:'Freedom',
//     }
// }
// console.log(userInfo[propertyName])
// console.log(userInfo)
// console.log(userInfo.name)
// console.log(userInfo.adress.city)

//Зміна значення властивості
// const userInfo = {
//         name: 'Микола',
//         age: 30,
//         hobbi: ['futbol', 'bascetbol'],
//         adress:{
//             city: "Odessa",
//             street: "Freedom"
//         }
//     };
    
    // userInfo.name = "Ivan";
    // userInfo.adress.city = "Kyiv";
    // userInfo.hobbi.push('Dota2');
    
    // console.log(userInfo.name);
    // console.log(userInfo.adress.city)
    // console.log(userInfo.hobbi)


    // додавання
    // userInfo.secondName = 'Lyamzin';
    // userInfo.adress.country = "Ukrain";
    // userInfo['like js'] = true,
    // userInfo["favorite food"] = {
    //     salad:'ceasar',
    //     tea:'black',
    // }

    // console.log(userInfo)
    // console.log(userInfo.secondName)
    // console.log(userInfo["favorite food"])

    // Видалення
    // delete userInfo.name;
    // delete userInfo.age;
    // delete userInfo["favorite food"].salad;
    // console.log(userInfo)

    //Короткі властивості
//     const name = 'Микола';
//     const age = 30;
//     const userInfo = {
//     name,
//     age,
//     hobbi: ['futbol', 'bascetbol'],
//     adress:{
//         city: "Odessa",
//         street: "Freedom"
//     },
// };
// console.log(userInfo)

//Обчислювальні властивості
// const propName = "age"

// const id = 'id'

// const userInfo = {
//         name: "Ivan",
//        [propName]: 42,
//        [id]:123123123,
//         hobbi: ['futbol', 'bascetbol'],
//         adress:{
//             city: "Odessa",
//             street: "Freedom"
//         },
//     };
//     console.log(userInfo)
//Методи обєкта
// const userInfo = {
//     name:'Микола',
//     age:30,
//     hobbi: ['futbol', 'bascetbol'],
//     adress:{
//                     city: "Odessa",
//                     street: "Freedom"
//                 },
//             showInfo: function(){
//                 console.log(`${userInfo.name}, ${userInfo.age} років. Адреса: місто ${userInfo.adress.city}, вул. ${userInfo.adress.street}`)
//             }
// };
// userInfo.showInfo()
//Доступ до властивостей обєкта в методах
// const user = {
//         name: "Іван",
//         age: 30,
//         sayHi() {
//           alert(user.name)
//         }
//       };
//       user.sayHi();

// let user = {
//         name: "Іван",
//         age: 30,
//         sayHi() {
//           alert(this.name)
//         }
//       };
//     let admin = user;
//     user = null;
//     admin.sayHi();
//     console.log(user)
//Перебирання обєкта

//цикл for...in
//         const user = {
//                 name: "Всеслав",
//                 lastName: "Полоцкий",
//                 middleName: "Брячеславович"
//             };
    
//             for(const key in user) {
//                 console.log(user[key]);
//             }

// const student = {
//                 name: "Александр",
//                 lastName: "Репета",
//                 age: 42,
//                 tabel: {
//                     history: 7,
//                     politic: 12,
//                     serials: 9
//                 },
//                 getAverageScore() {
//                     let sum = 0;
//                     let count = 0;
//                     for(const key in this.tabel){
//                         sum += this.tabel[key];
//                         count++;
//                     }
//                     return (sum / count);
//                 }
//             };
    
//             console.log(student.getAverageScore());
// метод hasOwnProperty()
// const student = {
//           name: "Александр",
//          lastName: "Репета",
// }
// console.log(student.hasOwnProperty('name'))
// console.log(student.hasOwnProperty('age'))

// метод Object.keys(obj)
// const user = {
//                     name: "Всеслав",
//                     lastName: "Полоцкий",
//                     middleName: "Брячеславович"
//                 };
//         const keys = [];
//         for(const key in user){
//             keys.push(key)
//         }
//         console.log(keys)
//         console.log(Object.keys(user))

//   const student = {
//                 name: "Александр",
//                 lastName: "Репета",
//                 age: 42,
//                 tabel: {
//                     history: 7,
//                     politic: 12,
//                     serials: 9
//                 },
//                 getAverageScore() {
//                     let sum = 0;
//                     const count = Object.keys(this.tabel).length;
//                     for(const key in this.tabel){
//                         sum += this.tabel[key];
//                     }
//                     return (sum / count)
//                 }
//             };
    
//             console.log(student.getAverageScore())
//метод Object.values() 
// const user = {
//                     name: "Всеслав",
//                     lastName: "Полоцкий",
//                     middleName: "Брячеславович"
//                 };
//         console.log(Object.values(user));
//         const values = [];
//         for(const key in user){
//             values.push(user[key])
//         }
//         console.log(Object.values(user))


        //   const student = {
        //                 name: "Александр",
        //                 lastName: "Репета",
        //                 age: 42,
        //                 tabel: {
        //                     history: 7,
        //                     politic: 12,
        //                     serials: 6
        //                 },
        //                 getAverageScore() {
        //                     let sum = 0;
        //                     const scores = Object.values(this.tabel);
        //                     const count = scores.length;
        //                     for(const value of scores){
        //                         sum += value;
        //                     }
        //                     return (sum / count)
        //                 }
        //             };
            
        //             console.log(student.getAverageScore())
//метод Object.entries()
// const user = {
//                     name: "Всеслав",
//                     lastName: "Полоцкий",
//                     middleName: "Брячеславович"
//                 };
//         console.log(Object.entries(user))

//Масив обєктів
// const animals = [
//     {name:"Vasya", type:"Cat", age:4},
//     {name:"Murka", type:"Cat", age:1.5},
//     {name:"Pufic", type:"Dog", age:3},
//     {name:"Randy", type:"Hamster", age:2.5},
//     {name:"Kolya", type:"Turtle", age:100},
// ];
// for(const animal of animals){
//     console.log(`${animal.name}, ${animal.age} років`)
// }


// Приклад

// const keys = ['name', 'age'];
// const values = ["Alex", 22];

// const obj = {};
// for(let i = 0; i < keys.length; i +=1){
//     // const key = keys[i];
//     // const value = values[i];
//     obj[keys[i]] = values[i];
// }
// console.log(obj)

// Приклад 2

// const arr = ['name: Alex', 'age: 22', 'city', 'lastName']
// const obj = {};
// for(let i = 0; i< arr.length; i+=1){
//     const elem = arr[i].split(": ")
//     const key = elem[0];
//     const value = elem[1];
//     obj[key] = value 
// }
// console.log(obj)

