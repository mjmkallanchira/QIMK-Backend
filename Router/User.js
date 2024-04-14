const express = require("express");
const router = express.Router();
const UserController=require('../Controllers/UserController')

router.route('/add-views').get(UserController.viewscontroller)
router.route('/get-prayer-time/:date').get(UserController.getprayertime)
router.route('/signup').post(UserController.signupuser)
router.route('/signin').post(UserController.signinuser)
router.route('/add-dua-request').post(UserController.addduarequest)
router.route('/userdata').get(UserController.getuserdata)
router.route('/get-live-data').get(UserController.getlivedata)
router.route('/get-dikr-data').get(UserController.getdikrdata)
router.route('/get-event-data').get(UserController.geteventdata)
router.route('/contact').post(UserController.usercontact)
router.route('/getallstudentdata').get(UserController.getstudentdata)
router.route('/get-educator-data').get(UserController.geteducatordata)
router.route('/:type/get-subject-data/:class').get(UserController.getsubjectdata)


module.exports = router;
