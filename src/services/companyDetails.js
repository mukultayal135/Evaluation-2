const axios=require('axios');
const utils=require('../utils/data');
const companyData=require('./companyData');
exports.getCompanyDetails=async(url)=>
{
 
  const companyDetails=await axios.get(url.urlLink);
  const data=companyDetails.data;
  const dataObj=utils.getData(data);  
  dataObj.shift();
  try{
    const reqCompanyDetails=await companyData.getCompanyDetails(dataObj);
    return reqCompanyDetails;
    
  }
  catch(error)
  {
    console.log(error);
  }
  
};

