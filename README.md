# Description du template

Template de base pour démarrer un projet front avec une pré-configuration de webpack pour l'utilisation de React et Sass.
<br>
<br>Attention : le template utilise React Hot Loader ce qui peut ne pas convenir à tous les projets.

## Installation du template

1. Copier le dossier à l'endroit souhaitée ou cliquer sur "Use this template" et créer un nouveau projet.
2. Ouvrir le terminal de commande sur le dossier front.
3. Lancer la commande `npm i`.
4. Lancer ensuite la commande `npm run start`.
5. Vous pouvez enfin vous rendre dans le dossier front/src et commencer à développer.
6. Lancer `npm run build` pour générer vos fichiers de production.

## Organisation des dossiers :

    front/
        |-- package.json
        |-- webpack.config.json
        |-- .babelrc
        |-- .browserslistrc
        |-- .eslintrc
        |-- src/
            |-- css/
                |-- style.scss
            |-- js/
                |-- index.jsx
            |-- img/
            |-- fonts/
    public/
        |-- assets/ (auto-generated content)
            |-- js/
                |-- index.min.js
            |-- css/
                |-- index.min.css
            |-- img/
        |-- uploads/
            |-- img/
        |-- index.html


## Dépendances pré-installées

Les commandes ne sont pas à réécrire sauf si vous effacez le fichier package.json et souhaitez personnaliser vos dépendances. Pour l'installation, reportez-vous à la section [installation](https://github.com/tasmim-concept/front-project/blob/add-structure/README.md#installation-du-template).

### Dev-dependencies

#### Webpack
    npm i -D webpack
    npm i -D webpack-cli
    npm i -D webpack-dev-server

#### CSS
    npm i -D css-loader (comprend le css)
    npm i -D sass-loader (convertis le sass/scss en css)
    npm i -D style-loader (écris le css dans le head)
    npm i -D postcss-loader (optimise le css)
    npm i -D mini-css-extract-plugin (écris le css dans un fichier css)

#### JS
    npm i -D babel-loader
    npm i -D @babel/preset-env
    npm i -D @babel/preset-react
    npm i -D react
    npm i -D react-dom
    npm i -D @hot-loader/react-dom
    npm i -D react-hot-loader

#### Fonts
    npm i -D file-loader

#### Images
    npm i -D url-loader
    npm i -D img-loader

#### Optimisation
    npm i -D clean-webpack-plugin
    npm i -D eslint-webpack-plugin (assure que le js est bien écrit)

### Inter-Depedencies

    npm i -D @babel/core
    npm i -D eslint
    npm i -D standard (dépendance eslint)
    npm i -D @babel/eslint-parser
    npm i -D imagemin
    npm i -D imagemin-gifsicle
    npm i -D imagemin-mozjpeg
    npm i -D imagemin-pngquant
    npm i -D imagemin-svgo
    npm i -D autoprefixer
    npm i -D cssnano
    npm i -D node-sass
    npm i -D postcss

### Depedencies

    npm i jquery (optionnel parce que pré-installé via les autres dépendances)
