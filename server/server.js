'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbSettings = require('../dbSettings');
const List = require('./model/list');
const app = express();
const port = 3001;
const db = `mongodb://${dbSettings.user}:${dbSettings.pass}@ds117189.mlab.com:17189/shopping-list`;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// setting ES6 promises in order to avoid mongoose promises deprecetation warning
mongoose.Promise = global.Promise;

mongoose.connect(db);

app.get('/', (req, res) =>{
	res.send('working');
});

router.route('/list')
	.get((req, res) => {
		List.find((err, items) => {
			if(err) return console.error(err);
			res.send(items);
		});
	})
	.post((req, res) => {
		if (!req.body.name || !req.body.quantity) return res.sendStatus(400);
		let newItem = new List();
		newItem.name = req.body.name;
		newItem.quantity = req.body.quantity;
		
		newItem.save((err, item) => {
			if(err) res.send(err);
			res.send("Item was added to the list"); 
		});
	})

router.route('/list/:id')
	.put((req, res) => {
		List.findById(req.params.id, (err, item) => {
			if(err) res.send(err);
			if(req.body.name) item.name = req.body.name;
			if(req.body.quantity) item.quantity = req.body.quantity;
			item.save((err, item) => {
				if(err) res.send(err);
				res.send('Item was updated');
			});	
		});
	})
	.delete((req, res) => {
		let id = req.params.id;
		List.findById(id, (err,item) => {
			if(err) res.send(err);
			List.remove({_id: id}, err => {
				if (err) res.send(err);
				res.send('Item was deleted');
			});
		});
	});


app.use('/api', router);

app.listen(port, () => {
	console.log(`Listening on a port ${port}`);
});


