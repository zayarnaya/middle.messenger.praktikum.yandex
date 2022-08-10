const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'dist')))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.use(function(req, res, next) {
    res.status(404);
  
    if (req.accepts('html')) {
      res.render('404', { url: "#404" });
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('Not found');
  });

app.listen(3000, () => {
    console.log('Application listening on port 3000 opent url http://127.0.0.1:3000 ');
});
