const router = require('express').Router();
const doctorsController = require('../Controller/doctorsController');

router.post('/create', doctorsController.createDoctor);
router.get('/get_doctors', doctorsController.getAllDoctors);
router.get('/get_doctor/:email', doctorsController.getDoctorByEmail);
router.put('/update_doctor/:email', doctorsController.updateDoctorByEmail);

module.exports = router;
