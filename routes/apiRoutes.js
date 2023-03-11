const express = require('express');
const router = express.Router();
const apiQueries = require('../queries/apiQueries');

router.get('/searchAll', apiQueries.getAll);

router.get('/getAllLike/:input', apiQueries.getAllLike);

router.get('/businesses/:name', apiQueries.getIndividualBusiness);

router.get('/images/:name', apiQueries.getBusinessImages);

module.exports = router;