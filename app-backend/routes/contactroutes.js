const express=require("express");
const {getcontact,createcontact,getcontacts,updatecontact,deletecontact}=require("../controllers/contactcontrollers")
const router=express.Router();

router.route('/').get(getcontacts).post(createcontact);
router.route('/:id').get(getcontact).put(updatecontact).delete(deletecontact);


module.exports=router;