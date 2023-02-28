const express = require('express');
const router = express.Router();
const apiQueries = require('../queries/apiQueries');

router.get('/searchAll', apiQueries.getAll);


module.exports = router;