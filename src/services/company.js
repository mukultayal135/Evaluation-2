const{CompanyDetails}=require('../models');
exports.createCompanyDetails=async (data)=>
{  
  const toBeSentDetails={    
    'id':data.companyId,
    'name':data.name,
    'score':data.score
  };
  await CompanyDetails.create(data);
  return toBeSentDetails;
};