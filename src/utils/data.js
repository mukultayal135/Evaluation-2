exports.getData=(data)=>
{
  const companies=data.split('\n');
  const dataCompany=companies.reduce((acc,curr)=>{
    const oneCompany={};
    const company=curr.split(',');
    const id=company[0];
    const sector=company[1];
    oneCompany.company_id=id;
    oneCompany.company_sector=sector;
    acc.push(oneCompany);
    return acc;
  } ,[]);
  return dataCompany;

};