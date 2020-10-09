  const express = require('express');
  const morgan = require('morgan');
  const bodyParser = require('body-parser');

  const app = express();
// initializing server port 
  const PORT = process.env.PORT || 3000;

  // log  request from browser
  app.use(morgan('dev'));
  // use body parser for get form data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/static', express.static('public'));

  app.set('views', './views');

  app.set('view engine', 'ejs');

  // Rendering all pages from  views 
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/about', (req, res) => {
    res.render('about');
  });
  app.get('/resume', (req, res) => {
    res.render('resume');
  });
  app.get('/project', (req, res) => {
    res.render('project');
  });
  app.get('/services', (req, res) => {
    res.render('services');
  });
  app.get('/contact', (req, res) => {
    res.render('contact');
  });
//  listining server 
app.listen(PORT, () => {
    console.log(`The server listening at http://localhost:${PORT}`);
});

module.exports = app;
