// Import express and path package
const express = require('express');
const path = require('path');

// Initialize express
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Invoking all static files through public folder
app.use(express.static('public'));

// The root URL to perform task
app.get('/', (req, res) => res.send('Please navigate to the Notes Keeper /notes'));

// URL to navigate to the notes HTML page.
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

// Set the port
const PORT = process.env.PORT || 3001;

// Listening to the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});