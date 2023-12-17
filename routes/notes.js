// Create a router for notes
const notes = require('express').Router();
// Used these helper files from the class works
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
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

// Route to the note based on the given id
notes.delete('/:noteId', (req, res) => {
     //console.log(req.params.noteId);

     var removeNoteId = req.params.noteId;
     if (removeNoteId) {
               readFromFile('./db/db.json').then((data) => {
               var jsonNotesData = JSON.parse(data);
               let filteredData = jsonNotesData.filter((data) => data.noteId !== removeNoteId)
                    writeToFile('./db/db.json', filteredData);
                    res.status(204).json({"message":"Note deleted successfully"});                   
          });
     }
});




module.exports = notes;