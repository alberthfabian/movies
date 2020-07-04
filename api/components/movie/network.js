const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
//router.post('/', upsert);

// functions
function list(req, res, next) {
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

/* function upsert(req, res, next) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
} */

module.exports = router;