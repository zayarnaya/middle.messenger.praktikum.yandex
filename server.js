const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(3000, () => {
    console.log('Application listening on port 3000 opent url http://127.0.0.1:3000 ');
});
