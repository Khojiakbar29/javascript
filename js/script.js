const numberOfFilms = +prompt('How many movies did you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Your last movie?', ''),
      b = prompt('How will you estimate it?', ''),
      c = prompt('Your last movie?', ''),
      d = prompt('How will you estimate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
