'use strict';

const knex = require('../knex');

let searchTerm = 'gaga';
let iD = '1002';
let updateObj = {title: '1001 Cat Tunes'}; 
let newItem =  {title: 'So Much Cat Trivia!', 'content': 'A whole bunch of latin phrases and then a passing reference to cat trivia'}; 
knex
  .select('notes.id', 'title', 'content')
  .from('notes')
  .modify(queryBuilder => { 
    if (searchTerm) {
      queryBuilder.where('title', 'like', `%${searchTerm}%`);
    }
  })
  .orderBy('notes.id') 
  .then(results => {
    console.log(JSON.stringify(results[0], null, 2));
  })
  .catch(err => {
    console.error(err);
  });
  //
  knex
  .select('notes.id', 'title', 'content')
  .from('notes')
  .where('notes.id', iD)
  .then(results => {
    console.log(JSON.stringify(results[0], null, 2));
  })
  .catch(err => {
    console.error(err);
  });
  //UPDATE
  //It returns the note as an object not an array
  knex
  .update(updateObj)
  .from('notes')
  .where('notes.id', iD)
  .returning(['notes.id', 'title', 'content'])
  .then(results => {
    console.log(JSON.stringify(results[0], null, 2)); 
  })
  .catch(err => {
    console.error(err);
  });
  //INSERT
  knex('notes')
  .insert(newItem)
  .returning(['notes.id','title','content'])
  .then(results=> console.log(JSON.stringify(results[0],null,2)))
  .catch(err => {
    console.error(err);
  });  
  //DELETE
  //It returns the note as an object not an array
  knex('notes')
  .where('notes.id', iD)
  .del()
  .then(()=> console.log('success'))
  .catch(err => {
    console.error(err);
  });