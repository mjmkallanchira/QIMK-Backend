const express=require('express')
const router=express.Router()
const AdminController=require('../Controllers/AdminController')

router.route('/').get(AdminController.adminhomecontroller)
router.route('/add-prayer-time').post(AdminController.adminprayercontroller)
router.route('/get-user-views').get(AdminController.adminviewscontroller)
router.route('/get-all-user').get(AdminController.adminusercontroller)
router.route('/get-prayer-time/:date').get(AdminController.admingetprayertimecontroller)
router.route('/get-all-prayer-time').get(AdminController.admingetallprayertimecontroller)
router.route('/delete-prayer-time/:id').delete(AdminController.admindeleteprayertimecontroller)
router.route('/addlive').post(AdminController.adminaddlivecontroller)
router.route('/get-all-live').get(AdminController.admingetlivecontroller)
router.route('/delete-live/:id').delete(AdminController.admindeletelivecontroller)
router.route('/addevent').post(AdminController.adminaddeventcontroller)
router.route('/get-all-events').get(AdminController.admingeteventscontroller)
router.route('/delete-event/:id').delete(AdminController.admindeleteeventscontroller)
router.route('/get-contact-details').get(AdminController.admingetcontactscontroller)
router.route('/delete-contact/:id').delete(AdminController.admindeletecontsctacontroller)
router.route('/add-student').post(AdminController.adminaddstudentcontroller)
router.route('/getstudentdata').get(AdminController.admingetstudentdatacontroller)
router.route('/delete-student').post(AdminController.admindeletestudentcontroller)
router.route('/add-educator').post(AdminController.adminaddeducatorcontroller)
router.route('/get-educator-data').get(AdminController.admingeteducatordatacontroller)
router.route('/delete-educator/:id').delete(AdminController.admindeleteeducatorcontroller)
router.route('/:type/add-subject').post(AdminController.adminaddsubjectcontroller)
router.route('/:type/get-subject-data').get(AdminController.admingetsubjectdatadatacontroller)
router.route('/:type/delete-subject').post(AdminController.admindeletesubjectcontroller)
router.route('/:type/add-chapter').post(AdminController.adminaddchaptercontroller)
router.route('/:type/getbookdata').get(AdminController.admingetchapterdatacontroller)
router.route('/:type/delete-chapter').post(AdminController.admindeletechaptercontroller)
router.route('/changeadmin/:state/:userid').patch(AdminController.adminchangecontroller)
router.route('/add-dikr-pdf').post(AdminController.adminadddikrcontroller)
router.route('/add-Representative').post(AdminController.adminaddrepresentatives)
router.route('/get-all-representative').get(AdminController.admingetrepresentatives)
router.route('/delete-representatives').post(AdminController.admindeleterepresentatives)
router.route('/clear-vote/:type/:name').get(AdminController.adminclearvote)
router.route('/get-dikr-pdf').get(AdminController.admingetdikrcontroller)
router.route('/get-dua-data').get(AdminController.admingetduacontroller)
router.route('/delete-dua/:id').get(AdminController.admindeleteduacontroller)
router.route('/delete-dikr-pdf/:id').delete(AdminController.admindeletedikrcontroller)
router.route('/add-team').post(AdminController.adminaddteamcontroller)
router.route('/get-team-data').get(AdminController.admingetteamdatacontroller)
router.route('/delete-team/:id').delete(AdminController.admindeleteteamcontroller)
router.route('/add-points/:points/:id').post(AdminController.adminaddpointscontroller)



module.exports=router