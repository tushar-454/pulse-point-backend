const router = require('express').Router();
const doctorsController = require('../Controller/doctorsController');

router.post('/create', doctorsController.createDoctor);

module.exports = router;
