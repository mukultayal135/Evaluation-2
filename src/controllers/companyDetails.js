const companyDetails=require('../services/companyDetails');
const {createCompanyDetails }=require('../services/company');

exports.saveCompanyDetails=async (req,res)=> {
  try {
    const toBeSent = [];
    const companyData = await companyDetails.getCompanyDetails(req.body);
    for (let index = 0; index < companyData.length; index++) 
    {
      const oneCompany = companyData[index];
      oneCompany['companyId'] = oneCompany['id'];
      delete oneCompany['id'];
      const resData = await createCompanyDetails(oneCompany);
      toBeSent.push(resData);

    }
    res.status(200).json(toBeSent);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
