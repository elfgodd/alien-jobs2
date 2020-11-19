const Restaurant = require('../models/Jobs')

exports.viewCreateJob = (req, res) => res.render('job/createJob')

exports.createJob = async(req, res) => {

    const { jobTitle, jobDescription, skill } = req.body
    const logo = req.file.path
    await Jobs.create({ jobTitle, jobDescription, skill })
    res.render('job/jobs-user')
}

exports.jobsUser = (req, res) => res.render('job/jobs-user')