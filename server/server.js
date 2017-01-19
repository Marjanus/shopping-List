'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbSettings = require('../dbSettings');
const List = require('./model/list');
const router = express.Router();
const app = express();
const port = 3001;
const db = `mongodb://${dbSettings.user}:${dbSettings.pass}@ds117189.mlab.com:17189/shopping-list`;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(db);

app.get('/', (req, res) =>{
	res.send('working');
});

router.get('/list', (req, res) => {
	List.find((err, items) => {
		if(err) return console.error(err);
		res.send(items);
	});
});

router.post('/list', (req, res) => {
	if (!req.body.name || !req.body.quantity) return res.sendStatus(400);
	let newList = new List();
	newList.name = req.body.name;
	newList.quantity = req.body.quantity;
	
	newList.save(function(err, book){
		if(err) res.send(err);
		res.send("Item was added to the list"); 
	});
})

app.use('/api', router);

app.listen(port, () => {
	console.log(`Listening on a port ${port}`);
});


