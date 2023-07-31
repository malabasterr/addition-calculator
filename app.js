const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`addition calculator app is listening on port 3000!`);
});