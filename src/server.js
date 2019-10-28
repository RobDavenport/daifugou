const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { Server } = require('colyseus');
const gameRoom = require('./gameRoom');
const { createServer } = require('http');

const port = process.env.PORT || 8080;
const gamePort = 8081;

//Define paths for Express config
const publicPath = path.join(__dirname, '../dist');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const app = express();

const gameServer = new Server({
    server: createServer(app),
    express: app
})

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

gameServer.listen(gamePort);

gameServer.define('standard', gameRoom);