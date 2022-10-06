// 2.1. Метод map()
// const sallariesInUah = [15000, 27000, 45000];
// const sallariesInUSD = sallariesInUah.map(item => item/42)
// console.log(sallariesInUSD)

// 2.1.1. Масив об’єктів
// const products = [
//     {
//         name:"Lenovo X120S",
//         price: 27500,
//     },
//     {
//         name:"Iphone 14",
//         price: 52500,
//     },
//     {
//         name:"Geforce 4900",
//         price: 98200,
//     }
// ]
// const productsPrice = products.map(product => product.price);
// console.log(productsPrice)

// 2.2. Метод filter()
// const sallaries = [15000, 27000, 45000];
// const highSallaries = sallaries.filter(item => item > 30000)
// console.log(highSallaries)

// const array = [1, -2, 1,0,4,7, -15,-3,10];
// const result = array.filter((item) => item >=0)
// const result2 = array.filter((item) => item <0)
// console.log(result)
// console.log(result2)

// 2.2.1. Фільтрація унікальних елементів
// const students = ["Саша", "Олег", "Кирило", "Богдан", "Влада", "Саша"];
// const uniqueNames = students.filter((name, index, arr) => arr.indexOf(name) === index)
// console.log(uniqueNames)

// 2.2.2 Масив обєктів
// const courses = [
//     {
//         lang:"english",
//         grade: "1C",
//     },
//     {
//         lang:"english",
//         grade: "1B",
//     },
//     {
//         lang:"spanish",
//         grade: "1C",
//     },
//     {
//         lang:"france",
//         grade: "1B",
//     }
// ]
// const englishCourses = courses.filter(course => course.lang === "english")
// console.log(englishCourses)

// 2.3. Метод find()
// const products = [
//     {
//         name:"Lenovo X120S",
//         price: 27500,
//     },
//     {
//         name:"Iphone 14",
//         price: 52500,
//     },
//     {
//         name:"Geforce 4900",
//         price: 98200,
//     },
//     {
//         name:"Lenovo X120S",
//         price: 25500,
//     },
// ]
// const result = products.find(product => product.name === "Lenovo X120S");
// console.log(result)

// 2.4. Метод findIndex()
// const products = [
//     {
//         name:"Lenovo X120S",
//         price: 27500,
//     },
//     {
//         name:"Iphone 14",
//         price: 52500,
//     },
//     {
//         name:"Geforce 4900",
//         price: 98200,
//     },
// ]

// const lenovoIndex = products.findIndex(product => product.name === "Lenovo X120S")
// products.splice(lenovoIndex, 1)
// console.log(products)
// 2.5. Метод reduce()
// const array = [1,2,3,4,5,6,7,8,3,4]
// // let result = 0;
// let sum = array.reduce((previousValue, currentValue)=> previousValue + currentValue, 0)
// console.log(sum)

// const array = [1,2,3,4,5,6,7,8,3,4,5,5,6,7,5,5,12,13,14]
// let max = array.reduce((acc, next)=> {
//     console.log(acc)
//     return Math.max(acc, next)
// }, 0)
// console.log(max)

// console.log(max)

// Редюс єто инструмент для того что бы перебрать массив и получить общий вывод в итоге.

// const dupes = [1,2,3,'a','a','f',3,4,2,'d','d']
// const withOutDupes = dupes.reduce((noDupes, curVal) =>{
//     if(noDupes.indexOf(curVal) === -1)
//     {noDupes.push(curVal)}
//         return noDupes
 
// },[])
// console.log(withOutDupes)

// 2.5.2. Масив об'єктів
// const products = [
//         {
//           name: "Lenovo X120S",
//           price: 27500,
//           quantity: 3,
//         },
//         {
//           name: "iPhone 14",
//           price: 52000,
//           quantity: 5,
//         },
//         {
//           name: "GeFrce 4900",
//           price: 98200,
//           quantity: 2,
//         },
//        ];
//     const productQuonytity = products.reduce((acum, product) => acum + product.quantity, 0);
//     console.log(productQuonytity)

// 3. Метод flatMap()
// const duplicate = (x) => [x, x];
// let arr = [2, 3, 4].map(duplicate);
// console.log(arr)

// const duplicate = (x) => [x, x];
// let arr = [2, 3, 4].map(duplicate).flat(); 
// console.log(arr)

// const duplicate = (x) => [x, x];
// let arr = [2, 3, 4].flatMap(duplicate); 
// console.log(arr)

// 4.Метод every ()
// const salaries = [13200, 8350, 1620, 6000];
// const result = salaries.every((item)=> item >=5600);
// console.log(result)

// 5. Метод some()

// function isBiggerThan10(element, index, array){
//     return element > 10;
// }
// let arr1 = [2,5,1,4].some(isBiggerThan10); // false
// let arr2 = [12,5,1,4].some(isBiggerThan10); // true
// console.log(arr1)
// console.log(arr2)


// 6. Метод sort()
// const array = [1,2,3,4,5,6,7,8,3,4]
// array.sort((elem1, elem2) => elem1 - elem2)
// let max = array.pop()
// console.log(max)

// const numbers = [30, 94, 60, 97, 5];
//         const sortedNumbers = [...numbers].sort((a, b) => b - a);
//         console.log(`source arr: `, numbers);
//         console.log('sortedNumbers: ', sortedNumbers);

// 6.2. Свій порядок сортування рядків
// const monitors = ['samsung', 'lG', 'asus', 'dELL', 'BENQ', 'aser', "SAMSUNG"];
// const sortedMonitors = [...monitors].sort((a,b)=> a.localeCompare(b))
// console.log(sortedMonitors)

// const letters = ["b", "B", "a", "A", "c", "C"];

// const letSort = [...letters].sort((a,b,)=>a.localeCompare(b))
//  console.log(letSort)

// 6.3. Сортування об'єктів
// const cars = [
//       {
//         make: 'Honda',
//         model: 'CR-V',
//         type: 'suv',
//         amount: 14,
//         price: 24045,
//         onSale: true,
//       },
//       {
//         make: 'Honda',
//         model: 'Accord',
//         type: 'sedan',
//         amount: 2,
//         price: 22455,
//         onSale: true,
//       },
//       {
//         make: 'Mazda',
//         model: 'Mazda 6',
//         type: 'sedan',
//         amount: 8,
//         price: 24195,
//         onSale: false,
//       },
//       {
//         make: 'Mazda',
//         model: 'CX-9',
//         type: 'suv',
//         amount: 7,
//         price: 31520,
//         onSale: true,
//       },
//       {
//         make: 'Toyota',
//         model: '4Runner',
//         type: 'suv',
//         amount: 19,
//         price: 34210,
//         onSale: false,
//       },
//       {
//         make: 'Toyota',
//         model: 'Sequoia',
//         type: 'suv',
//         amount: 16,
//         price: 45560,
//         onSale: false,
//       },
//       {
//         make: 'Toyota',
//         model: 'Tacoma',
//         type: 'truck',
//         amount: 4,
//         price: 24320,
//         onSale: true,
//       },
//       {
//         make: 'Ford',
//         model: 'F-150',
//         type: 'truck',
//         amount: 11,
//         price: 27110,
//         onSale: true,
//       },
//       {
//         make: 'Ford',
//         model: 'Fusion',
//         type: 'sedan',
//         amount: 13,
//         price: 22120,
//         onSale: true,
//       },
//       {
//         make: 'Ford',
//         model: 'Explorer',
//         type: 'suv',
//         amount: 6,
//         price: 31660,
//         onSale: false,
//       },
//     ];

    // const sortByAscendingAmount = (cars) =>{
    //     return [...cars].sort((a,b) => a.amount - b.amount);
    // };
    // console.table(sortByAscendingAmount(cars))




    // Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.
// const sortByAscendingAmount = (cars) =>{
//     return [...cars].sort((a,b) => b.price - a.price)
// }
//   console.table(sortByAscendingAmount(cars))
    //Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі в алфавітному 
    // та зворотному алфавітному порядку, залежно від значення параметра order.

    // const sortByModel = (cars, order) => {
    //       return [...cars].sort((a, b) => {
    //         if (order === 'asc') {
    //           return a.model.localeCompare(b.model);
    //         } else if (order === 'desc') {
    //           return b.model.localeCompare(a.model);
    //         }
    //       });
    //     };
        
    //     console.table(sortByModel(cars, 'asc'));
        // console.table(sortByModel(cars, 'desc'));
    // 7. Ланцюжки методів

    // const salaries = [10000, 15000, 20000, 80000, 100000]
//         const salaryUSD = salaries.map((item)=> item/42)
//         const highSalaries = salaryUSD.filter((item)=> item > 1000)


// const highSalaries = salaries.map((item) => item/42).filter((item)=> item > 1000)
//         console.log(highSalaries)


// Практика 1
// const food = [
//     { name: "Пицца", weight: 740, price: 150, quantity: 5 },
//     { name: "Пельмени", weight: 250, price: 215, quantity: 9 },
//     { name: "Курица", weight: 649, price: 310, quantity: 4 },
//     { name: "Ананас", weight: 217, price: 405, quantity: 15 },
//     { name: "Брокколи", weight: 500, price: 10, quantity: 25 },
//     { name: "Свинина", weight: 255, price: 65, quantity: 6 },
//     ];

//     const result = food.filter(foo => foo.price > 80 && foo.quantity < 7);
//     console.log(result)

//     const weight = result.reduce((total, amount)=> total += amount.weight * amount.quantity, 0);
//     console.log(weight)

// Практика 2
// const letters = ["b", "B",5,1, "a", "A", "c", "C", 2,6,7];

// const letSort = [...letters].sort()

// const letSort = [...letters].sort((a,b,)=>a.localeCompare(b))
// const toUp = letters.map((item)=> item.toUpperCase())
// const letSort = toUp.sort()

//  console.log(letSort)


