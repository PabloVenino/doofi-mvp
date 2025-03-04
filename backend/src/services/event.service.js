const Event = require('../models/events/event.model');

const EventService = {
  async createEvent(eventData) {
    return await Event.create(eventData);
  },

  async getAllEvents() {
    return await Event.findAll();
  },

  async getEventById(id) {
    return await Event.findById(id);
  },

  async updateEvent(id, eventData) {
    return await Event.update(id, eventData);
  },

  async deleteEvent(id) {
    return await Event.delete(id);
  },
};

module.exports = EventService;
