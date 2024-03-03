const mongoose = require("mongoose");

const jobsschema = {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }

}

const jobsmodel= mongoose.model("jobs", jobsschema);
module.exports = jobsmodel;