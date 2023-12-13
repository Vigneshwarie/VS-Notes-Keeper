// Create a router for notes
const notes = require('express').Router();
// Used these helper files from the class works
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// Route to get all the existing notes
notes.get('/', (req, res) => {
      // Read the data from the db file and display
     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// Route to create a new note
notes.post('/', (req, res) => {
     const { title, text } = req.body;

     if (req.body) {
          const newNote = {
               title,
               text,
               noteId: uuid(),
          };

          readAndAppend(newNote, './db/db.json');
          res.json(`Note saved successfully`);
     } else {
     res.error('Error in creating a note');
     }
});


module.exports = notes;