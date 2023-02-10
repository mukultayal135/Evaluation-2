const utils=require('../../src/utils/data');
describe('Test Data Utils', () => {
  it('should return array of comapny returns',()=>
  {
    const mockInput='company_id,company_sector\n95b5a067-808a-44a9-a490-b4ef8a045f61,Automobile';
    const mockOutput=[{ company_id: 'company_id', company_sector: 'company_sector' },{company_id: '95b5a067-808a-44a9-a490-b4ef8a045f61',company_sector: 'Automobile'}];
    const res=utils.getData(mockInput);
    expect(res).toEqual(mockOutput);
  });
});