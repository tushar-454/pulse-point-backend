const { Schema, model } = require('mongoose');

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  MostSpecialist: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  visitingFee: {
    type: Number,
    required: true,
  },
  totalCounseling: {
    type: Number,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
  address: {
    type: {
      location: {
        type: String,
        required: true,
      },
      mapLink: String,
    },
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  overview: {
    type: {
      about: {
        type: String,
        required: true,
      },
      services: {
        type: [String],
        required: true,
      },
      Specialties: {
        type: [String],
        required: true,
      },
      education: {
        type: [
          {
            degree: {
              type: String,
              required: true,
            },
            institute: {
              type: String,
              required: true,
            },
            year: {
              type: String,
              required: true,
            },
          },
        ],
        required: true,
      },
      experience: {
        type: [
          {
            designation: {
              type: String,
              required: true,
            },
            institute: {
              type: String,
              required: true,
            },
            year: {
              type: String,
              required: true,
            },
          },
        ],
        required: true,
      },
      award: {
        type: [
          {
            title: {
              type: String,
              required: true,
            },
            year: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
          },
        ],
        required: true,
      },
    },
    required: true,
  },
  chamber: {
    type: {
      hospitalBranch: {
        type: String,
        required: true,
      },
      floor: {
        type: String,
        required: true,
      },
      room: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      hospitalIframe: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  review: {
    type: [
      {
        patientName: {
          type: String,
          required: true,
        },
        patientPhoto: {
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
      },
    ],
    required: true,
  },
  businessHours: {
    type: [
      {
        day: {
          type: String,
          required: true,
        },
        from: {
          type: String,
          required: true,
        },
        to: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
});

module.exports = model('Doctor', doctorSchema, 'doctors');
