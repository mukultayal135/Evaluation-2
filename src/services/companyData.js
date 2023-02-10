const axios=require('axios');

const getScore=(id,companyBySector) =>{
 
  const score=companyBySector.reduce((acc,curr)=>{
    if(curr.companyId===id)
    {
      const cpi=curr.performanceIndex.find((item)=>item.key==='cpi').value;
      const cf=curr.performanceIndex.find((item)=>item.key==='cf').value;
      const mau=curr.performanceIndex.find((item)=>item.key==='mau').value;
      const roic=curr.performanceIndex.find((item)=>item.key==='roic').value;
      const score = ((cpi * 10) + (cf / 10000) + (mau * 10) + roic) / 4;
      acc+=score;   
    }
    return acc;
  },0);
  console.log(score);
  return score;
};

const getCompanyDetails= async (data) => {
  const reqCompanyDetails=[];
  for(let index=0;index<data.length;index++) {
    const id=data[index].company_id;
    const sector=data[index].company_sector;
    const IdUrl=`http://localhost:4000/company/${id}`;
    const sectorUrl=`http://localhost:4000/sector?name=${sector}`;
    
    const oneCompanyById=await axios.get(IdUrl).then((response)=>{ return response.data;});
  
    const oneCompanyBySector=await axios.get(sectorUrl).then((response)=>{ return response.data;});
    const score=companyDataService.getScore(id,oneCompanyBySector);
    oneCompanyById.score=score;
    reqCompanyDetails.push(oneCompanyById);

  }
  return reqCompanyDetails;
};

const companyDataService={
  getCompanyDetails,
  getScore
};
module.exports=companyDataService;