const express = require('express');
const router = express.Router();

router.get('/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

module.exports = router;
