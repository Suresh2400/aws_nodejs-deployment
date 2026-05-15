const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/api/get', (req, res) => {
    res.send("Server running successfully");
});

app.listen(8000, () => {
    console.log("listen to 8000");
});