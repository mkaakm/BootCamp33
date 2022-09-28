// push
// const games = ["DeadeSpace", "Mass Effect", "Dota2"]
// console.log(games)

// const result = games.push("Heroes 3");
// console.log(games)
// console.log(result)

// const result2 = games.push('Heroes of Might and Magic','Disciples')
// console.log(games)
// console.log(result2)

// const arr1 = [1,2,3]
// const arr2 = [];
// console.log(`arr2 = ${arr2}`);
// for(const elem of arr1){
//     arr2.push(elem)
// }
// console.log(`arr2 = ${arr2}`);

// arr1[0] = 15;
// console.log(`arr1 = ${arr1}`);
// console.log(`arr2 = ${arr2}`);

// pop
// const users = ['Дайнеріс Таргаріан','Джон Сноу','Сарсея Ланістер'];
// console.log(users);
// users.pop();
// console.log(users);
// users.pop();
// console.log(users);
// users.pop();
// console.log(users);

// const users = ['Дайнеріс Таргаріан','Джон Сноу','Сарсея Ланістер', "Арія Старк"];
// const lastUser = users.pop()
// console.log(users.pop())
// console.log(users)
// console.log(lastUser)

// Shift
// const users = ['Дайнеріс Таргаріан','Джон Сноу','Сарсея Ланістер', "Арія Старк"];
// console.log(users)
// const result = users.shift();
// console.log(users)
// console.log(result)
// users.shift
// console.log(users)

// Unshift
// const foods = ['Яйця','Бекон','Кава'];
// console.log(foods);
// const result = foods.unshift('Смажені помідори');
// console.log(foods);
// console.log(result);

// Split
// const favoriteDish = prompt("Введіть ваші улюблені страви через кому");
// console.log(favoriteDish)
// const favoriteDishArr = favoriteDish.split(", ");
// console.log(favoriteDishArr);
// console.log(`В вас ${favoriteDishArr.length} Улюблених страв`);

// Join
// const planets = ['Марс','Венера','Юпітер','Земля','Сатурн']
// const planetsStr = planets.join(", ")
// console.log(`Планети сонячної системи: ${planetsStr}`)
// console.log(planets.join());

// Indexof
// const holidays = ['Новий рік','8 березня ','23 лютого','31 грудня']
// const index = holidays.indexOf('23 лютого');
// console.log(index)
// console.log(holidays)
// holidays[index] = '14 жовтня'
// console.log(holidays)
// console.log(holidays.indexOf('Різдво'))

//Includes
// const holidays = ['Новий рік','8 березня ','14 жовтня','31 грудня']
// const isHolidey = holidays.includes('14 жовтня')
// console.log(isHolidey)
// if(isHolidey){
//     console.log('В святах є 14 жовтня')
// }else{
//     console.log(
//         'В святах немає 14 жовтня'
//     )
// }

//slice 
// const cars = ['Mercedes','BMW','Mazda','Toyota','Reno','Ford']
// console.log(cars.slice(2, 4))

// splice
// const cars = ['Mercedes','BMW','Mazda','Toyota','Reno','Ford']
// const newCarsArray = cars.splice(2,2)
// const newCarsArray = cars.splice(2)
// console.log(cars)
// console.log(newCarsArray)

// const marvel = ['Залізна людина','Халк','Тор','Локі','Чорна вдова']
// const newMarvelArray = marvel.splice(2, 4, 'Доктор Стрейндж','Капітан Америка')
// console.log(marvel)
// console.log(newMarvelArray)



// Concat
// const oldGames = ['cs 1.6', 'Diablo 2', 'StarCraft', 'Fallout']
// const newGames = ['PUBG',  'GTA 5', 'Dota2', 'Portal2']
// const lovelyGames = ['Witcher',  'Assasins creed', 'Postal', 'Dungeon keeper2']

// const allGamesWithOldFirst = oldGames.concat(newGames);
// console.log(allGamesWithOldFirst)

// const allGamesWithNewFirst = newGames.concat(oldGames);
// console.log(allGamesWithNewFirst)

// const allGamesWithNewFirst = newGames.concat(oldGames, lovelyGames);
// console.log(allGamesWithNewFirst)


// Додавання
// const cars = ['Mercedes', 'BMW', 'Mazda', 'Toyota', 'Reno', 'Ford'];
// cars.splice(1, 0, "Tesla", 'Lexus')
// console.log(cars)

// Заміна
// const books = ['Важко бути богом', 'Від колиски до могили', 'Євангеліон', 'Троя', 'Історія Люфтлаффе', 'Пікнік біля узбіччя'];
// const books2 = ['1984', 'Як вбити Русню', "Портрет Доріана Грея", 'Як зібрати на супутник за 2 дні', "що в чорному пакеті"];

// const book3 = books.concat(books2)
// console.log(book3)

// for(let i = 0; i < books2.length; i++){
//     books.splice(i, 1, books2[i])
// }

// books.splice(3, 1, ...books2)
// console.log(books)