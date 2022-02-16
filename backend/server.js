const express = require('express');
const app = express();
// router
const products = require('./routes/productsRoute');
const orders = require('./routes/orderRoute');
const user = require('./routes/userRoutes');
const config = require('./routes/configRoute');
// db
const connectDB = require('./db/connect');
require('dotenv').config();
// middleware
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

// parse request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/', products);
app.use('/api/v1/', orders);
app.use('/api/v1/', user);
app.use('/api/v1/config', config);

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
