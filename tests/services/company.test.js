const company=require('../../src/services/company');
const {CompanyDetails}=require('../../src/models');
describe('Test createDetails service', () => {
  it('shoudl return details of comapnies',async ()=>
  {
    const mockReq={
      companyId: '95b5a067-808a-44a9-a490-b4ef8a045f61',
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
      score: 15.784075000000001};
    const mockRes={
      id: '95b5a067-808a-44a9-a490-b4ef8a045f61',
      name: 'Volkswagen',
      score: 15.784075000000001};
    jest.spyOn(CompanyDetails,'create').mockResolvedValue();
    const result=await company.createCompanyDetails(mockReq);
    expect(CompanyDetails.create).toBeCalledWith(mockReq);
    expect(result).toEqual(mockRes);

  });

});