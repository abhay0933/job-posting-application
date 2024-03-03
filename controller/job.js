const jobmodel = require("../model/job");

const createjob = async (req, res) => {
    try {
        console.log(req.body);
    const newjob = new jobmodel(req.body);
    await newjob.save();
    res.json({
        success: true,
        message: "job created successfully"
    });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "something went wrong"
        })
    }
};

const getjob = async (req, res) => {
    const jobList = await jobmodel.find({});
    console.log(jobList);
    res.json({
        success: true,
        message: "this is get job api",
        results : jobList
    });
};

const editjob = async (req,res) => {

    const updatedjob = await jobmodel.updateOne({_id : req.body._id}, {$set: req.body})

    res.json({
        success:true,
        message: "data updated"
    })
}

const deletejob = async (req,res) => {
   try {
    await jobmodel.findByIdAndDelete(req.body._id);
    res.json({
        success: true,
        message: "Job deleted successfully"
    });
    
   } catch (error) {
    res.status(500).json({
        success:false,
        message: "Something went wrong"
    })
   }
};

module.exports = {
    createjob,
    getjob,
    editjob,
    deletejob
}