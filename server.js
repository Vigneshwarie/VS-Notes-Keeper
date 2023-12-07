// Import express package
const express = require('express');

// Initialize express
const app = express();

// The root URL to perform task
app.get('/', (req, res) => { });

// Set the port
const PORT = process.env.PORT || 3001;

// Listening to the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});