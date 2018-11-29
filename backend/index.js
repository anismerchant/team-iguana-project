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
app.get('/inventory', (req, res) => {
    res.json(inventory_list_data);
})


// TODO: GET Warehouse Inventory

app.get('/warehouses/:id', (req, res) => {
    let warehouseId = Number(req.params.id);
    const warehouseArr = inventory_list_data.filter(data => data.warehouse_id === warehouseId);
    
    if (warehouseArr.length === 0){
        res.status(404).send('Error: That page does not exist!');

    } else {
        res.json(warehouseArr);
    }

})


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
// Create an endpoint
app.post('/warehouses/:id', (req, res) => {

    // Create a new object with data received in POST request 
    let newObject = {
        "warehouse_id": (Number(req.params.id)),
        "type": req.body.type,
        "address_street": req.body.address_street,
        "city": req.body.city,
        "country": req.body.country,
        "postal_code": req.body.postal_code,
        "manager_name": req.body.manager_name,
        "phone_num": req.body.phone_num,
        "email": req.body.email
    }

    // If the data is malformed or if a field is missing, 
    //  return a 400 status, rejecting the POST request.
    
    // Solution One: Works
    if (typeof req.body.address !== 'string' || req.body.address === null || req.body.address === '' || req.body.address === undefined || req.body.address === NaN) {
        return res.status(400).send("404 Status Error. Opps, something went wrong. Please be sure no fields are left empty and only enter what's asked."); 
    } 
    if (typeof req.body.contact !== 'string' || req.body.contact === null || req.body.contact === '' || req.body.contact === undefined || req.body.contact === NaN) {
        return res.status(400).send("404 Status Error. Opps, something went wrong. Please be sure no fields are left empty and only enter what's asked.");
    } 
    if (typeof req.body.type !== 'string' || req.body.type === null || req.body.type === '' || req.body.type === undefined || req.body.type === NaN) {
        return res.status(400).send("404 Status Error. Opps, something went wrong. Please be sure no fields are left empty and only enter what's asked.");
    } 
    else {
        return res.json(newObject);
    }

    // Solution Two: Doesn't work
    // if (typeof req.body.address === 'string' && req.body.address !== "") {
    //     console.log(req.body.address)
    //     return res.json(newObject); 
    // } 
    // if (typeof req.body.contact === 'string' && req.body.contact !== "") {
    //     return res.json(newObject);
    // } 
    // if (typeof req.body.type === 'string' && req.body.type !== "") {
    //     return res.json(newObject);
    // } 
    // else {
    //     return res.status(400).send("404 Status Error. Opps, something went wrong. Please be sure no fields are left empty and only enter what's asked."); 
    // }
});


// TODO: DELETE Item



// Server Listening...
app.listen(8080, () => {
    console.log('Server running on 8080...');
});
