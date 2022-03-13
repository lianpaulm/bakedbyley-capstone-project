const express = require('express');
const router = express.Router();
const path = require('path');

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});

module.exports = router;
