
const { Schema, model } = require('mongoose')

const jobsSchema = new Schema(
    {
    ownerID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    jobTitle: String,
    jobDescription: String,
    skill: String  
    }
)

module.exports = model('Jobs', jobsSchema)