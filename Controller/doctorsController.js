const Doctor = require('../Model/Doctor');

/* 
  create a doctor from this api
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

/*
  get all doctors from this api
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

module.exports = { createDoctor, getAllDoctors };
