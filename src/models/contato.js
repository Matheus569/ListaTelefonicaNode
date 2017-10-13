'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	nome : {
		type : String,
		required : true,
		index : true
	},
	telefone : [{
		type : String,
		required : true		
	}],
	data : {
		type : Date,
		required : true
	}
});

module.exports = mongoose.model('Contato', schema);