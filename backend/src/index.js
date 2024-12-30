// Import the express library to create the server
const express = require('express');

// Import body-parser to parse JSON request bodies
const bodyParser = require('body-parser');

//Import user routes
const userRoutes = require('./routes/users');

// Create an instance of the Express application
const app = express();

// Use the body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define the port number the server will listen on
const port = 3001;

// Define a route for the root URL that sends a "Hello World!" message
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use the user routes with the /api prefix
app.use('/api', userRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});