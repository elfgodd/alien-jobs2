
const { Router } = require('express');
// i removed profilePicture from de destruction
const { logout, signupViewUser, signupViewJobs, signupProcessUser, loginView, indexView, signupProcessJob, loginProcess, profileView } = require('../controllers/authControllers');
//const uploadPicture = require('../config/ cloudinary')

const router = Router()
router.get('/', indexView)
router.get('/signup', signupViewUser);
router.get('/signup-jobs', signupViewJobs)
router.post('/signup', signupProcessUser)
router.post('/signup-jobs', signupProcessJob)
router.get('/login', loginView)
router.post('/login', loginProcess)
router.get('/profile', profileView)
router.get('/logout', logout)
//router.post('/profile-picture', uploadPicture.single('image'), profilePicture)
module.exports = router;