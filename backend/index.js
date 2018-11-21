const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const videoArray = require('./inventory_list_data.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

app.use(express.static('public'));

// TODO: GET All Warehouses

// TODO: GET All Inventory

// TODO: GET Warehouse Inventory

// TODO: GET Inventory Item

// TODO: POST Warehouse

// TODO: DELETE Item