require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

const params = {
    nombre: 'Saúl Landa',
    titulo: 'Curso Node'
};

// Handlebars
app.set( 'view engine', 'hbs' );
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static('public') );

app.get('/', function (req, res) {
    res.render('home', params);
});

app.get('/generic', function (req, res) {
    res.render('generic', params);
});

app.get('/elements', function (req, res) {
    res.render('elements', params);
});

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})