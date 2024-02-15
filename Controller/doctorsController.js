const Doctor = require('../Model/Doctor');

/**
 * create doctor
 */
const createDoctor = async (req, res, next) => {
  try {
    const { name, email, photoUrl, mostSpecialist } = req.body;
    const doctorExist = await Doctor.findOne({ email });
    if (!doctorExist) {
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
    } else {
      res.status(400).json({
        message: 'Doctor already exist',
      });
    }
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

/**
 * update doctor by email
 */
const updateDoctorByEmail = async (req, res, next) => {
  try {
    const { email: emailParams } = req.params;
    const {
      name,
      photoUrl,
      mostSpecialist,
      rating,
      role,
      visitingFee,
      totalCounseling,
      specialist,
      address,
      tags,
      overview,
      chamber,
      review,
      businessHours,
    } = req.body;
    const updatedDoctor = await Doctor.findOne({ email: emailParams });
    updatedDoctor.name = name ?? updatedDoctor.name;
    updatedDoctor.photoUrl = photoUrl ?? updatedDoctor.photoUrl;
    updatedDoctor.mostSpecialist =
      mostSpecialist ?? updatedDoctor.mostSpecialist;
    updatedDoctor.rating = rating ?? updatedDoctor.rating;
    updatedDoctor.role = role ?? updatedDoctor.role;
    updatedDoctor.visitingFee = visitingFee ?? updatedDoctor.visitingFee;
    updatedDoctor.totalCounseling =
      totalCounseling ?? updatedDoctor.totalCounseling;
    updatedDoctor.specialist = specialist ?? updatedDoctor.specialist;
    updatedDoctor.address =
      { ...updatedDoctor.address, ...address } ?? updatedDoctor.address;
    updatedDoctor.tags = tags ?? updatedDoctor.tags;
    updatedDoctor.overview =
      { ...updatedDoctor.overview, ...overview } ?? updatedDoctor.overview;
    updatedDoctor.chamber =
      { ...updatedDoctor.chamber, ...chamber } ?? updatedDoctor.chamber;
    updatedDoctor.review = review ?? updatedDoctor.review;
    updatedDoctor.businessHours = businessHours ?? updatedDoctor.businessHours;
    await updatedDoctor.save();
    res.status(200).json({
      message: 'success',
      updatedDoctor,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorByEmail,
  updateDoctorByEmail,
};
