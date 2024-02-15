const { Schema, model } = require('mongoose');

const testimonialSchema = new Schema({
  patientName: {
    type: String,
    required: true,
  },
  patientImage: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = model('Testimonial', testimonialSchema, 'testimonials');
