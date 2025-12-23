const express = require('express');
const router = express.Router();

router.get('/restaurants', (req, res) => {
    res.status(200).json([{name: 'John Doe'}, {name: 'Jane Doe'}]);
});

module.exports = router;