// Create a router for notes
const notes = require('express').Router();
// Used these helper files from the class works
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// Route to get all the existing notes
notes.get('/', (req, res) => {
      // Read the data from the db file and display
     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


module.exports = notes;