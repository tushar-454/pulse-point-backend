const Doctor = require('../Model/Doctor');

/**
 * create doctor
 */
const createDoctor = async (req, res, next) => {
  try {
    const { name, email, photoUrl, mostSpecialist } = req.body;
    const createdDoctor = new Doctor({
      name,
      email,
      photoUrl,
      mostSpecialist,
      rating: 0,
      role: ' ',
      visitingFee: 0,
      totalCounseling: 0,
      specialist: ' ',
      address: {
        location: ' ',
        mapLink: ' ',
      },
      tags: [],
      overview: {
        about: ' ',
        services: [],
        specialties: [],
        education: [],
        experience: [],
        awards: [],
      },
      chamber: {
        hospitalBranch: ' ',
        floor: ' ',
        room: ' ',
        phoneNumber: ' ',
        hospitalIframe: ' ',
      },
      review: [],
      businessHours: [],
    });
    const doctor = await createdDoctor.save();
    res.status(200).json({
      message: 'success',
      doctor,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * get all doctors
 */
const getAllDoctors = async (_req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      message: 'success',
      doctors,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * get doctor by email
 */
const getDoctorByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const doctor = await Doctor.findOne({ email });
    res.status(200).json({
      message: 'success',
      doctor,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDoctor, getAllDoctors, getDoctorByEmail };
