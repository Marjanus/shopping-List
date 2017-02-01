'use strict';

var mongoose = require('mongoose');

var listSchema = mongoose.Schema({
	name: String,
	quantity: String
});

module.exports = mongoose.model('List', listSchema);