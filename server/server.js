'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var List = require('./model/list');
//module with data for database login 
var dbSettings = require('../dbSettings');
var app = express();
var router = express.Router();
var port = process.env.API_port || 3001;
var db = `mongodb://${dbSettings.user}:${dbSettings.pass}@ds117189.mlab.com:17189/shopping-list`;


// setting ES6 promises in order to avoid mongoose promises depreciation warning
mongoose.Promise = global.Promise;

mongoose.connect(db);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
	res.json({message: 'API is working'});
});

router.route('/list')
	.get((req, res) => {
		List.find((err, items) => {
			if(err) res.send(err);
			res.json(items);
		});
	})
	.post((req, res) => {
		if (!req.body.name || !req.body.quantity){
			return res.status(400).send({error: 'All fields must be filled'});
		} 
		let newItem = new List();
		newItem.name = req.body.name;
		newItem.quantity = req.body.quantity;
		
		newItem.save((err) => {
			if(err) res.send(err);
			res.json({message: "Item was added to the list"}); 
		});
	});

router.route('/list/:id')
	.put((req, res) => {
		List.findById(req.params.id, (err, item) => {
			if(err) res.send(err);
			(req.body.name) ? item.name = req.body.name : null;
			(req.body.quantity) ? item.quantity = req.body.quantity : null;
			item.save((err) => {
				if(err) res.send(err);
				return res.json({message: 'Item was updated'});
			});	
		});
	})
	.delete((req, res) => {
		List.remove({_id: req.params.id}, err => {
			if (err) res.send(err);
			return res.json({message: 'Item was deleted'});
		});
	});
	
app.use('/api', router);

app.listen(port, () => {
	console.log(`Listening on a port ${port}`);
});


