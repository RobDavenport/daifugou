const path = require('path');
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 8080;

//Define paths for Express config
const publicPath = path.join(__dirname, '../dist');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Daifugou!',
        name: 'Robbie Davenport'
    });
})

app.listen(port, () => {
    console.log('Server is up on ' + port);
})