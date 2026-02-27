const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servuoti statinius failus
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🌍 Serveris veikia: http://localhost:${PORT}`);
});
