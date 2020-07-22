const express = require('express');

const authService = require('../services/authService');

const router = express.Router();

router.post('/', (req, res) =>
  authService
    .login(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
);

module.exports = router;
