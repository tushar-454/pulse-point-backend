const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = model('Patient', patientSchema, 'patients');
