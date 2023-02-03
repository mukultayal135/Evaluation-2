const express = require('express');
const router=express.Router();
const companyDetails=require('../controllers/companyDetails');

router.route('/')
  .post(companyDetails.saveCompanyDetails);
module.exports=router;