'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies did you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies did you watch?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Your last movie?', ''),
          b = prompt('How will you estimate it?', '');

    if (a != null && b != null && a != '' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Your last movie?', ''),
              b = prompt('How will you estimate it?', '');
    
        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

if (personalMovieDB.count < 10) {
    console.log('Enough movies have watched');

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are classic movielover');
} else if (personalMovieDB.count >= 30) {
    console.log('You are kinoman');
} else {
    console.log('It is error');
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Enough movies have watched');
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are classic movielover');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are kinoman');
    } else {
        console.log('It is error');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your lovely genre is ${i}`);
    }
}

writeYourGenres();


