const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model('Service', serviceSchema, 'services');
