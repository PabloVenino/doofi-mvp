const db = require('../../config/database');

const Event = {
  async create(eventData) {
    return await db('events').insert(eventData).returning('*');
  },

  async findAll() {
    return await db('events').select('*');
  },

  async findById(id) {
    return await db('events').where({ id }).first();
  },

  async update(id, eventData) {
    return await db('events').where({ id }).update(eventData).returning('*');
  },

  async delete(id) {
    return await db('events').where({ id }).del();
  },
};

module.exports = Event;
