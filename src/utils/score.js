exports.getScore=(id,companyBySector) =>{
  const score=companyBySector.reduce((acc,curr)=>{
    if(curr.companyId===id)
    {
      const cpi=curr.performanceIndex[0].value;
      const cf=curr.performanceIndex[1].value;
      const mau=curr.performanceIndex[2].value;
      const roic=curr.performanceIndex[3].value;
      const score = ((cpi * 10) + (cf / 10000) + (mau * 10) + roic) / 4;
      acc+=score;
      
    }
    return acc;
  },0);
  return score;

};