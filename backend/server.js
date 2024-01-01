// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001; // You can choose any port

app.use(cors());
app.use(express.json());

// Define routes for fetching data from the public API
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Replace with your API endpoint
    const data = response.data; // You may need to parse and format the data here
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
