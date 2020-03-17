let mix = require('laravel-mix');

mix.sass('src/css/style.scss', 'dist')
    .copy('public/index.html', 'dist')
    .copy('src/js/categories.js', 'dist')
    .js('src/js/main.js', 'dist');
