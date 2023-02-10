const utils=require('../../src/utils/score');
describe('Test Score Utils', () => {
  it('should return score of a company',()=>
  {
    const mockCompanySector = [{
      'companyId': '8888888888-888888-009900-999999999',
      'performanceIndex': [{
        'key': 'cpi',
        'value': 0.2
      }, {
        'key': 'cf',
        'value': 30000
      },{
        'key': 'mau',
        'value': 0.1
      },{
        'key': 'roic',
        'value': 20
      }]
    }];
    const res=utils.getScore('8888888888-888888-009900-999999999',mockCompanySector);
    expect(res).toEqual(6.5);
  });
});