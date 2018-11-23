const express = require('express');
const app = express();
const bodyParser = require('body-parser');
<<<<<<< HEAD
const warehouses = require('warehouses');
const inventoryList = require('inventoryList')
=======
const inventory_list_data = require('./inventory_list_data.json');
const warehouse_data = require('./warehouse_data.json');

>>>>>>> 858e5f774b98330a55f02aeaf5582ecb7e90303b
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
app.get('/warehouses', (req,res)=>{
    res.json(warehouses);
})
// TODO: GET All Inventory

// TODO: GET Warehouse Inventory

// TODO: GET Inventory Item
app.get('/inventory/:id', (req,res) => {
    const requestedItem = req.params;
    const item = inventoryList.find(item => item.id == requestedItem.id);

    if(item !== null)
    {
        res.json(item);
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