const router = require('express').Router();
const doctorsController = require('../Controller/doctorsController');

router.post('/create', doctorsController.createDoctor);
router.get('/get_doctors', doctorsController.getAllDoctors);

module.exports = router;
