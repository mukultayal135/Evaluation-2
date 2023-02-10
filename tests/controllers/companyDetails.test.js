const companyDetails = require('../../src/controllers/companyDetails');
const createCompanyData=require('../../src/services/company');
const companyData=require('../../src/services/companyDetails');
describe('Test Company Details Controller', () => {
  it('Test saveCompanyDetails function', async () => {
    const objGetDetails=[{
      id: '95b5a067-808a-44a9-a490-b4ef8a045f61',
      name: 'Volkswagen',
      description: 'Alias modi beatae ipsam omnis saepe ipsam. Beatae ratione excepturi illum molestias corrupti. Fugiat natus deserunt dolorem.',
      ceo: 'Geoffrey Gleason',
      tags: [
        'transparent',
        'robust',
        'global',
        'out-of-the-box',
        '24/7',
        'seamless',
        'holistic',
        'leading-edge',
        'user-centric',
        'visionary'
      ],
      score: 15.784075000000001}];
    const req = {
      body: {
        urlLink:'https://store-0001.s3.amazonaws.com/input.csv'
      }
    };
    jest.spyOn(companyData, 'getCompanyDetails').mockResolvedValue(objGetDetails);
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockObjRes=
      {
        'id': '95b5a067-808a-44a9-a490-b4ef8a045f61',
        'name': 'Volkswagen',
        'score': 15.784075000000001
      };   
    
    jest.spyOn(createCompanyData,'createCompanyDetails').mockResolvedValue(mockObjRes);

    await companyDetails.saveCompanyDetails(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([mockObjRes]);
  });
  it('should return 500 status code', async () => {
    const req = {
      body: {
        urlLink:'https://store-0001.s3.amazonaws.com/input.csv'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.spyOn(companyData, 'getCompanyDetails').mockRejectedValue(new Error('Internal Server Error'));
    await companyDetails.saveCompanyDetails(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });
  });
});