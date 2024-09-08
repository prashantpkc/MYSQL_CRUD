const express = require('express');
const dotenv = require('dotenv');
const db = require('./src/config/db'); // Importing database connection
const studentRoute = require("./src/routes/studentRoute");

dotenv.config({ path: '/.env' });

// Initialize the express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Test Route (Basic root route)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Student routes
app.use('/api/students', studentRoute);

// Start the server on the specified port
const PORT = process.env.PORT || 6700;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
