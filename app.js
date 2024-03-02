/*-------------------------EXAMPLE-1--------------------------*/

// const greating = () => {
//   return "Hello";
// };
// const sayHello = (func, name) => {
//   return func() + " " + name;
// };

// const result = sayHello(greating, "Domiyor");
// console.log(result);

/*-------------------------EXAMPLE-2--------------------------*/

// function sayHello() {
//   return () => {
//     return "hello";
//   };
// }
// const result = sayHello()();
// console.log(result);

/*-------------------------EXAMPLE-3--------------------------*/

// let callMe = () => {
//   console.log("Hello There");
// };
// callMe()

/*-------------------------------Methods---------------------*/

// const movies = [
//   {
//     name: "Spider man",
//     year: 2023,
//     rate: 8.8,
//     genre: ["Anvanture", "Action", "Comedy"],
//     country: ["United States"],
//     isAdult: false,
//   },
//   {
//     name: "The Godfather",
//     year: 1972,
//     rate: 9.2,
//     genre: ["Mafia", "Crime film", "Drama"],
//     country: ["United States", "Italy"],
//     isAdult: true,
//   },
//   {
//     name: "T - 34",
//     year: 2014,
//     rate: 5.9,
//     genre: ["Advanture", "Drama", "War", "Action"],
//     country: ["Russia"],
//     isAdult: true,
//   },
//   {
//     name: "Parasite",
//     year: 2019,
//     rate: 7.5,
//     genre: ["Advanture", "Drama", "War", "Action"],
//     country: ["South Korea"],
//     isAdult: true,
//   },
//   {
//     name: "Paddington",
//     year: 2014,
//     rate: 4.5,
//     genre: ["Advanture", "Fantasy", "Animation", "Comedy"],
//     country: ["France", "England"],
//     isAdult: false,
//   },
//   {
//     name: "Titanic",
//     year: 1997,
//     rate: 7.5,
//     genre: ["Advanture", "Fantasy", "Thriller", "Comedy"],
//     country: ["United States", "England"],
//     isAdult: true,
//   },
// ];

// FOR
// for (let i = 0; i < movies.length; i++) {
//   console.log(`Name:'${movies[i].name}',"year:"${movies[i].year}`);
// }

// FOREACH
// movies.forEach((item, index, arr) => {
//   console.log(arr);
//   console.log(index, `Name:${item.name},Year:${item.year}`);
// });

// SOME() VA EVERY()
// const someMovies = movies.some((movie) => {
//   return movie.year > 2023;
// });
// console.log(someMovies);

// const everyMovies = movies.every((movie) => {
//   return movie.year <= 2023;
// });
// console.log(everyMovies);

