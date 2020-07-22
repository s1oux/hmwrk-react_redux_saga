const express = require('express');

const userService = require('../services/userService');

const router = express.Router();

router.get('/', (req, res) =>
  userService
    .getUsers()
    .then((users) => res.json(users))
    .catch((err) => res.json(err))
);

router.get('/:id', (req, res) =>
  userService
    .getUserById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
);

router.post('/', (req, res) =>
  userService
    .addUser(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
);

router.put('/', (req, res) => 
  userService
    .editUser(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
);

router.delete('/:id', (req, res) => 
  userService
    .deleteUser(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
);

module.exports = router;
