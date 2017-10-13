'use strict'

const mongoose = require('mongoose');
const Contato = mongoose.model('Contato');

exports.get = (req, res, next) => {
	Contato.find({}, 'nome data telefone').
		then(data => {
			res.status(200).send(data);
		}).catch(e => {
			res.status(400).send({message: 'Falha ao buscar contatos!', data:e});
		});
};

exports.getByNome = (req, res, next) => {
	Contato.find({nome: req.params.nome}, 'nome data telefone').
		then(data => {
			res.status(200).send(data);
		}).catch(e => {
			res.status(400).send({message: 'Falha ao buscar contatos!', data:e});
		});
};

exports.post = (req, res, next) => {
	var contato = new Contato(req.body);
	contato
		.save().
		then(x => {
			res.status(201).send({message: 'Contato adicionado!'});
		}).catch(e => {
			res.status(400).send({message: 'Falha ao cadastrar contato!', data:e});
		});
	
};

exports.put = (req, res, next) => {
	const id = req.params.id;
	res.status(200).send({
		id : id,
		item : req.body
	});
};

exports.delete = (req, res, next) => {
	const id = req.params.id;
	res.status(200).send({
		id : id,
		item : req.body
	});
};