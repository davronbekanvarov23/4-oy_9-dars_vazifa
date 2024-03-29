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
//     genre: ["Advanture", "Action", "Comedy"],
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

// const moviesUpto6 = [];
// for (let i = 0; i < movies.length; i++) {
//   if (movies[i].rate >= 6 && movies[i].rate<=8) {
//     moviesUpto6.push(movies[i]);
//   }
// }
// console.log(moviesUpto6)

// const moviesUpto6 = movies.filter((movie) => {
//   return movie.rate >= 6 && movie.rate <= 8;
// });
// console.log(moviesUpto6);

/*--------------------- MAP ()----------------*/

// const decriseRates = movies.map((movie) => {
//   return { ...movie, rate: movie.rate - 1 };
// });

// console.log(decriseRates);

/*---------------------FIND() || FINDINDEX ()------------------*/

// FIND ()

// const findedMovie = movies.find((movie) => {
//   return movie.name == "Titanic";
// });
// console.log(findedMovie);

// const findedMovie = movies.findIndex((movie) => {
//   return movie.name == "Titanic";
// });
// console.log(findedMovie);

/*------------------------FLAT() || FLATMAP()---------------*/

// let arr1 = [10, 20, [(30, 40, 50)], [60, 70, 80, 90], 100];
// let arr2 = [10, 20, [(30, [40, 50])], [[60, 70, 80], 90], 100];
// let arr3 = [10, 20, [(30, [40, 50])], [[[60, 70], 80], 90], 100];

// const arr2Example = arr2.flat();
// console.log(arr2Example);

// let employe = [
//   { id: 101, name: "John", skills: ["HTML", "CSS", "JAVASCRIPT"] },
//   { id: 101, name: "John", skills: ["C#", "SQL"] },
//   { id: 101, name: "John", skills: ["ANGULAR", "REACT"] },
// // ];
// let employe1 = employe
//   .map((employer) => {
//     return employer.skills;
//   })
//   .flat();
// console.log("map+flat", employe1);

// let employe2 = employe.flatMap((employer) => {
//   return employer.skills;
// });
// console.log("flatMap", employe2);

/*---------------------SORT()-----------------*/
// const sortedMovies=[...movies].sort((m1,m2)=>{return m1.rate-m2.rate})
// console.log('newArray',sortedMovies)
// console.log('originalArray',movies)

// Object.assign()
// const newObj = Object.assign( movies);

/*---------------- reduce()------------*/

// const array1 = [1, 2, 3, 4, 5];
// const sum = array1.reduce((acc, curVal) => {
//   return acc + curVal;
// });
// console.log(sum);

// const allMoviesGenres = movies.flatMap((movie) => {
//   return movie.genre;
// });
// // console.log(allMoviesGenres);

// const sumAllGenres = allMoviesGenres.reduce((acc, curVal) => {
//   if (!acc[curVal]) {
//     acc[curVal] = 1;
//   } else {
//     acc[curVal] += 1;
//   }
//   return acc;
// },{});
// console.log(sumAllGenres);
