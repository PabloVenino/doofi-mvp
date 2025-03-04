const EventService = require('../services/event.service');

const EventController = {
  async create(req, res) {
    try {
      const event = await EventService.createEvent(req.body);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create event' });
    }
  },

  async getAll(req, res) {
    try {
      const events = await EventService.getAllEvents();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  },

  async getById(req, res) {
    try {
      const event = await EventService.getEventById(req.params.id);
      if (!event) return res.status(404).json({ error: 'Event not found' });
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch event' });
    }
  },

  async update(req, res) {
    try {
      const event = await EventService.updateEvent(req.params.id, req.body);
      if (!event) return res.status(404).json({ error: 'Event not found' });
      res.status(200).json(event);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update event' });
    }
  },

  async delete(req, res) {
    try {
      const success = await EventService.deleteEvent(req.params.id);
      if (!success) return res.status(404).json({ error: 'Event not found' });
      res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete event' });
    }
  },
};

module.exports = EventController;
