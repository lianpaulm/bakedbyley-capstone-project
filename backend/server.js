const express = require('express');
const app = express();
// parse request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// using express
app.get('/api/product', (req, res) => {
  console.log('user hit the resource');
  res.status(200).json({ success: true, data: [1, 2, 3, 'hello'] });
});
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>');
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`server is listening on port ${port}...`);
});
