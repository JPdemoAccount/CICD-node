const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

// Serve static files (HTML, CSS, JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
