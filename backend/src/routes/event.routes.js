const express = require('express');
const EventController = require('../controllers/event.controller');

const router = express.Router();

router.post('/events', EventController.create);
router.get('/events', EventController.getAll);
router.get('/events/:id', EventController.getById);
router.put('/events/:id', EventController.update);
router.delete('/events/:id', EventController.delete);

module.exports = router;
