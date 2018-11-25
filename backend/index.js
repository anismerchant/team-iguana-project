const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const inventory_list_data = require('./inventory_list_data.json');
const warehouse_data = require('./warehouse_data.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

app.use(express.static('public'));

//GET All Warehouses
app.get('/warehouses', (req,res)=>{
    res.json(warehouse_data);
})
// TODO: GET All Inventory

// TODO: GET Warehouse Inventory

//GET Inventory Item
app.get('/inventory/:id', (req,res) => {
    const requestedItem = Number(req.params.id);
    const itemList = inventory_list_data.find(item => item.id === requestedItem);
    
    if(itemList !== null)
    {
        res.json(itemList);
    }
    else
    {
        res.send({msg:'Item Not Found 404'});
    }
})
// TODO: POST Warehouse

// TODO: DELETE Item


app.listen(8080, () => 
{console.log('Warehouse Server running on 8080')})