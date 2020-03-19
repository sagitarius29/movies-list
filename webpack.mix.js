let mix = require('laravel-mix');

mix.sass('src/css/style.scss', 'dist')
    .copy('public/', 'dist/')
    .js('src/js/main.js', 'dist');
