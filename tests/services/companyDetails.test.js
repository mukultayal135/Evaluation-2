const companyDetails=require('../../src/services/companyDetails');
const axios=require('axios');
const utils=require('../../src/utils/data');
const companyData=require('../../src/services/companyData');

describe('Test getting compnay details', () => {
  it('should return company details',async ()=>{
    const resolvedData={
      data:'company_id,company_sector\n95b5a067-808a-44a9-a490-b4ef8a045f61,Automobile'
    };
    const resolvedDataObj= [{ company_id: 'company_id', company_sector: 'company_sector' },
      {company_id: '95b5a067-808a-44a9-a490-b4ef8a045f61',company_sector: 'Automobile'}];
    
    const resolvedCompanyDetails=[{
      id: '95b5a067-808a-44a9-a490-b4ef8a045f61',
      name: 'Volkswagen',
      score: 15.784075000000001
    },
    {
      id: '95b5a067-808a-44a9-a490-b4ef8a045f61',
      name: 'Volkswagen',
      score: 15.784075000000001},
    ];
    jest.spyOn(axios,'get').mockResolvedValue(resolvedData);
    jest.spyOn(utils,'getData').mockReturnValue(resolvedDataObj);
    jest.spyOn(companyData,'getCompanyDetails').mockResolvedValue(resolvedCompanyDetails);
    const res = await companyDetails.getCompanyDetails({urlLink:'https://store-0001.s3.amazonaws.com/input.csv'});
    expect(res).toEqual(resolvedCompanyDetails);
  });
  it('should return error',async ()=>{
    const resolvedData={
      data:'company_id,company_sector\n95b5a067-808a-44a9-a490-b4ef8a045f61,Automobile'
    };
    const resolvedDataObj= [{ company_id: 'company_id', company_sector: 'company_sector' },
      {company_id: '95b5a067-808a-44a9-a490-b4ef8a045f61',company_sector: 'Automobile'}];
    jest.spyOn(axios,'get').mockResolvedValue(resolvedData);
    jest.spyOn(utils,'getData').mockReturnValue(resolvedDataObj);
    jest.spyOn(companyData,'getCompanyDetails').mockRejectedValue(new Error('error'));
    await companyDetails.getCompanyDetails({urlLink:'https://store-0001.s3.amazonaws.com/input.csv'});

  });
});
