let mix = require('laravel-mix');

mix.copy('public', 'dist');

mix.sass('src/css/style.scss', 'dist/series');
//mix.sass('src/css/style.scss', 'dist/movies');

mix.js('src/js/main.js', 'dist/movies');

mix.js('src/js/main_series.js', 'dist/series');
