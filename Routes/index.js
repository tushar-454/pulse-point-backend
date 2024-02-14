const router = require('express').Router();
const doctorsRoutes = require('./doctorsRoutes');

router.use('/api/v1/doctors', doctorsRoutes);

module.exports = router;
