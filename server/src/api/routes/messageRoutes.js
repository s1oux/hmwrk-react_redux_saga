const express = require('express');

const messageService = require('../services/messageService');

const router = express.Router();

router.get('/', (req, res) =>
  messageService
    .getMessages()
    .then((messages) => res.json(messages))
    .catch((err) => res.json(err))
);

router.get('/:id', (req, res) =>
  messageService
    .getMessageById(req.params.id)
    .then((message) => res.json(message))
    .catch((err) => res.json(err))
);

router.post('/', (req, res) =>
  messageService
    .addMessage(req.body)
    .then((message) => res.json(message))
    .catch((err) => res.json(err))
);

router.put('/', (req, res) => 
  messageService
    .editMessage(req.body)
    .then(message => res.json(message))
    .catch(err => res.json(err))
);

router.delete('/:id', (req, res) => 
  messageService
    .deleteMessage(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.json(err))
);

module.exports = router;
