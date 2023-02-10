const companyDataService= require('../../src/services/companyData');
const axios = require('axios');

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
    const res=companyDataService.getScore('8888888888-888888-009900-999999999',mockCompanySector);
    expect(res).toEqual(6.5);
  });
});
describe('Test getting of Company data', () => {
  it('should return company details with score ', async () => {
    const mockReq = [
      {
        company_id: '8727cc61-8c4b-4285-8853-2db808392c04',
        company_sector: 'Software',
      },
    ];
    const resObj = [
      {
        id: 'b6472c52-732a-4fd2-a463-ae604c0a2c79',
        name: 'Microsoft',
        description:
          'Sapiente earum molestiae molestias maxime numquam rem esse quos excepturi. Nihil accusamus sequi ipsa. Harum cupiditate ipsa. Eveniet corporis est nemo officia numquam non fugiat. Incidunt mollitia atque officia doloribus voluptatem. Sint repellendus velit.',
        ceo: 'Gary Hauck',
        tags: [
          'dynamic',
          'front-end',
          '24/7',
          'front-end',
          'dynamic',
          'user-centric',
        ],
        score: 13.27365,
      },
    ];
    jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({
        data: {
          id: 'b6472c52-732a-4fd2-a463-ae604c0a2c79',
          name: 'Microsoft',
          description:
            'Sapiente earum molestiae molestias maxime numquam rem esse quos excepturi. Nihil accusamus sequi ipsa. Harum cupiditate ipsa. Eveniet corporis est nemo officia numquam non fugiat. Incidunt mollitia atque officia doloribus voluptatem. Sint repellendus velit.',
          ceo: 'Gary Hauck',
          tags: [
            'dynamic',
            'front-end',
            '24/7',
            'front-end',
            'dynamic',
            'user-centric',
          ],
        },
      })
      .mockResolvedValueOnce({
        data: [
          {
            companyId: '8888888888-888888-009900-999999999',
            performanceIndex: [
              {
                key: 'cpi',
                value: 0.2,
              },
              {
                key: 'cf',
                value: 30000,
              },
              {
                key: 'mau',
                value: 0.1,
              },
              {
                key: 'roic',
                value: 20,
              },
            ],
          },
        ],
      });

    jest.spyOn(companyDataService,'getScore').mockReturnValue(13.27365);
    const res = await companyDataService.getCompanyDetails(mockReq);
    expect(res).toEqual(resObj);
  });
});

