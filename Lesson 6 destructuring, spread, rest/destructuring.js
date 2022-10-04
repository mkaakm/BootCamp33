// 1 Деструктуризація обєктів

//  const grandlord = {
//     name: "Тайвин",
//     lastName: "Ланнистер",
//     status: "глава дома Ланнистеров",
//     castle: "Утес Кастерли",
//     words: "Услышь мой рёв!",
//     sword: "Светлый рёв",
//     vasalls: ["Рейны", "Веларионы"]
//     };
    
//     const {words, sword,castle,vasalls} = grandlord
    // const castle = grandlord.castle;
    // const words = grandlord.words;
    // const sword = grandlord.sword;
    // const vasalls = grandlord.vasalls;
    
    // console.log(vasalls[0])
    // console.log(castle)
    // console.log(words)
    // console.log(sword)

    // 2 Значення за замовчуванням.
//  const grandlord = {
//     name: "Тайвин",
//     lastName: "Ланнистер",
//     status: "глава дома Ланнистеров",
//     castle: "Утес Кастерли",
//     words: "Услышь мой рёв!",
//     sword: "Светлый рёв",
//     vasalls: ["Рейны", "Веларионы"]
//     };
// const {name, lastName, marriage = false } = grandlord;
// console.log(marriage)
// console.log(grandlord)

    // 3. Зміна імені змінної
//  const grandlord = {
//     name: "Тайвин",
//     lastName: "Ланнистер",
//     status: "глава дома Ланнистеров",
//     castle: "Утес Кастерли",
//     words: "Услышь мой рёв!",
//     sword: "Светлый рёв",
//     children:{
//         daugther: "Серсея",
//         son: "Джейме"
//     },
//     vasalls: ["Рейны", "Веларионы"]
//     };


//     const {name: userName, lastName: userLastName, age: userAge = 63} = grandlord;
    // console.log(grandlord)
    // console.log(userName)
    // console.log(userLastName)
    // console.log(userAge)

    // 1.4. Деструктуризація в циклах
    // const houses = [
    //     {
    //         name: 'Ланністер',
    //         castle:'Утес Кастерлі',
    //         words:'Почуй мій рев',
    //     },
    //     {
    //         name: 'Старки',
    //         castle:'Вінтерфел',
    //         words:'Зима поряд',
    //     },
    //     {
    //         name: 'Грейджої',
    //         castle:'Пайк',
    //         words:'Ми не сіємо',
    //     },
    // ]
    // const houseNames = [];
    // const housesCastes = [];

    // for(const house of houses){
    //     houseNames.push(house.name)
    //     housesCastes.push(house.castle)
    // }

// 2 Варіант    
    //  for(const house of houses){
    //     const {name, castle} = house
    //     houseNames.push(name)
    //     housesCastes.push(castle)
    // }

    // 3 Варіант
    // for(const {name, castle } of houses){
    //     houseNames.push(name)
    //     housesCastes.push(castle)
    // }
    // console.log(houseNames)
    // console.log(housesCastes)

    // 1.5. Глибока деструктуризація
    // const user = {
    //                 name: "Тайвин",
    //                 lastName: "Ланнистер",
    //                 status: "глава дома Ланнистеров",
    //                 castle: "Утес Кастерли",
    //                 words: "Услышь мой рёв!",
    //                 sword: "Светлый рёв",
    //                 vasalls: ["Рейны", "Веларионы"],
    //                 children: {
    //                     main: "Джейме",
    //                     daughter: "Серсея",
    //                     son: "Тирион"
    //                 }
    //             };
        // const {children: {daughter}} = user; // вложена деструктуризація

        // const daughter = user.children.daughter;
        // const {daughter} = user.children
        // console.log(daughter)