const{CompanyDetails}=require('../models');
exports.createCompanyDetails=async (data)=>
{  
  const toBeSentDetails={    
    'id':data.id,
    'name':data.name,
    'score':data.score
  };
  const companyDetails=await CompanyDetails.create(data);

  return toBeSentDetails;
};