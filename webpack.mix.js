// webpack.mix.js

let mix = require("laravel-mix");

mix
  .js("./js/app.js", "./bundle.js")
  .postCss("./css/app.css", "./app.css", [require("tailwindcss")]);
