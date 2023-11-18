// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware setup
app.use(bodyParser.json());

// Endpoint for log ingestion
app.post('/logs', (req, res) => {
    const logData = req.body; // Assuming the log data is sent in the request body
    // Process the logData: Perform database operations, error handling, etc.
    console.log('Received log:', logData);
    res.status(200).send('Log received successfully');
});

// Starting the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

