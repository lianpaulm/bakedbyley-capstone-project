const express = require('express');
const app = express();
const products = require('./routes/productsRoute');
const connectDB = require('./db/connect');
require('dotenv').config();

// parse request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/', products);

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>');
});

const port = process.env.PORT || 5000;

// connecting to db before to start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
