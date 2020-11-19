
const { Router } = require('express');
// i removed profilePicture from de destruction
const { signupViewUser, signupViewJobs, signupProcessUser, loginView, indexView, signupProcessJob, loginProcess, profileView } = require('../controllers/authControllers');
//const uploadPicture = require('../config/ cloudinary')

const router = Router()
router.get('/', indexView)
router.get('/signup-user', signupViewUser);
router.get('/signup-jobs', signupViewJobs)
router.post('/signup-user', signupProcessUser)
router.post('/signup-jobs', signupProcessJob)
router.get('/login', loginView)
router.post('/login', loginProcess)
router.get('/profile', profileView)
//router.post('/profile-picture', uploadPicture.single('image'), profilePicture)
module.exports = router;