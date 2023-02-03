const axios=require('axios');
const utils=require('../utils/score');
exports.getCompanyDetails= async (data) => {
  const reqCompanyDetails=[];
  for(let index=0;index<data.length;index++) {
    const id=data[index].company_id;
    const sector=data[index].company_sector;
    const IdUrl=`http://54.167.46.10/company/${id}`;
    const sectorUrl=`http://54.167.46.10/sector?name=${sector}`;
    
    const oneCompanyById=await axios.get(IdUrl).then((response)=>{ return response.data;});
  
    const oneCompanyBySector=await axios.get(sectorUrl).then((response)=>{ return response.data;});
    const score=utils.getScore(id,oneCompanyBySector);
    oneCompanyById.score=score;
    reqCompanyDetails.push(oneCompanyById);

  }
  return reqCompanyDetails;
};