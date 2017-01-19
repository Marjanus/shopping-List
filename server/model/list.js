'use strict';

const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
	name: String,
	quantity: String
});

module.exports = mongoose.model('List', listSchema);