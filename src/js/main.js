import Xwiper from 'xwiper';
window.currentSelected = 0;

let categoriesTarget;
let moviesTarget;

let categories = [
    {
        name: 'ESTRENO',
        movies: window.Estreno
    },
    {
        name: 'INFANTIL',
        movies: window.Infantil
    },
    {
        name: 'TERROR',
        movies: []
    },
    {
        name: 'COMEDIA',
        movies: []
    },
    {
        name: 'DRAMA',
        movies: []
    }
];

function renderMovies() {
    moviesTarget.innerHTML = '';

    categories[window.currentSelected].movies.forEach((movie) => {
        moviesTarget.innerHTML += '<div class="movie">' +
            '<a href="'+((movie.movie === undefined || movie.movie === '') ? '#' : movie.movie)+'"><img src="'+movie.cover+'"></a>' +
            '</div>';
    });
}

window.changeCategory = (index) => {
    window.currentSelected = index;
    renderCategories();
    renderMovies();
    //renderMovies();
};

window.afterLoading = () => {
    console.log('cargando');
    /*categoriesTarget = document.querySelector('.categories ul');
    moviesTarget = document.querySelector('.movies');
    console.log(categoriesTarget);

    renderCategories();
    renderMovies();

    const xwiper = new Xwiper('.movies-wrapper');

    xwiper.onSwipeLeft(() => nextCategory());
    xwiper.onSwipeRight(() => prevCategory());*/
};

function renderCategories() {
    categoriesTarget.innerHTML = '';

    categories.forEach((item, index) => {
        categoriesTarget.innerHTML += '<li><a '+getClass(index)+' onclick="changeCategory('+index+')" href="#">'+item.name+'</a></li>';
    });
}

function nextCategory() {
    console.log('Next category', window.currentSelected);
    const total = categories.length;
    if(window.currentSelected < total - 1) {
        changeCategory(currentSelected + 1);
    }
}

function prevCategory() {
    console.log('Prev category', window.currentSelected);
    const total = categories.length;
    if(window.currentSelected > 0) {
        changeCategory(currentSelected - 1);
    }
}

function getClass(index) {
    if(index === window.currentSelected) {
        return 'class="active"';
    }
    return '';
}
