const router = require('express').Router();
const doctorsController = require('../Controller/doctorsController');

router.get('/all-doctors', doctorsController.getAllDoctors);

module.exports = router;
