const express = require('express');
const app = express();
const products = require('./routes/productsRoute');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

// parse request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/', products);

app.use(notFound);
app.use(errorHandlerMiddleware);

// connecting to db before to start server
const port = process.env.PORT || 5000;
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
