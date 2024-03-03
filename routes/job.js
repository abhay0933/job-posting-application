const express = require("express");
const jobcontroller = require("../controller/job");


const router= express.Router();

router.post("", jobcontroller.createjob);
router.get("", jobcontroller.getjob);
router.patch("", jobcontroller.editjob);
router.delete("", jobcontroller.deletejob);

module.exports = router;