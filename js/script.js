'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies did you watch?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies did you watch?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Enough movies have watched');
        
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are classic movielover');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are kinoman');
        } else {
            console.log('It is error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <=3; i++) {
            let genre = prompt(`Your lovely genre is ${i}`);

            if (genre === '' || genre == null) {
                console.log('Not correct information');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Lovely genre ${i + 1} - this is ${item}`);
        });
    }   
};


