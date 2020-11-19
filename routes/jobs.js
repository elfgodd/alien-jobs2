
const { Router } = require('express');
//const uploadPicture = require('../config/ cloudinary');
const { viewCreateJob, createJob, jobsUser } = require('../controllers/jobsControllers');
const router = Router()


router.get('/create', viewCreateJob)
//router.post('/create', uploadPicture.single('image'), createJob)
router.get('/jobs-user', jobsUser)

module.exports = router