'use strict';

const express = require('express');

// Create an router instance (aka "mini-app")
const router = express.Router();

// TEMP: Simple In-Memory Database
//const data = require('../db/notes');
//const simDB = require('../db/simDB');
//const notes = simDB.initialize(data);
const knex = require('../knex');
// Get All (and search by query)
router.get('/', (req, res, next) => {
  knex.select('id', 'name')
    .from('folders')
    .orderBy('folders.id')
    .then(results => res.json(results))
    .catch(err => {next(err)})
});

// Get a single item
router.get('/:id', (req, res, next) => {
  const { id } = req.params;

  knex
  .select('folders.id', 'name')
  .from('folders')
  .where('folders.id', id)
  .then(results => res.json(results[0]))
  .catch(err => {next(err)})
});
// Put update an item
router.put('/:id', (req, res, next) => {
  const id = req.params.id;

  /***** Never trust users - validate input *****/
  const updateObj = {};
  const updateableFields = ['name'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }
  });

  /***** Never trust users - validate input *****/
  if (!updateObj.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }
  knex
    .update(updateObj)
    .from('folders')
    .where('folders.id', id)
    .returning(['folders.id', 'name'])
    .then(results => res.json(results[0]))
    .catch(err => {next(err)})
  }); 

// Post (insert) an item
router.post('/', (req, res, next) => {
  const { name } = req.body;

  const newItem = { name };
  /***** Never trust users - validate input *****/
  if (!newItem.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  knex('folders')
  .insert(newItem)
  .returning(['folders.id','name'])
  .then(results => res.json(results[0]))
  .catch(err => {next(err)}) 
}); 
// Delete an item
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('folders')
  .where('folders.id', id)
  .del()
  .then(()=> res.sendStatus(204))
  .catch(err => {next(err)})
});

module.exports = router;
