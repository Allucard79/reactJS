const movies = [{
        id: 1,
        title: 'Hobbit',
        desc: 'Film na podstawie książki J.R.R Tolkiena',
        poster: './img/hobbit.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film opowiadający historię króla sawanny',
        poster: './img/lionKing.jpg'
    },
    {
        id: 3,
        title: 'Alien',
        desc: 'Kino grozy połączone z fantastyką naukową.',
        poster: './img/alien.jpg'
    }
];

const moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.poster})
    );
});

const element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));