const request = require('supertest');
const app = require('./app');
const utils = require('./utils')

describe('Tuffle Health Medical Bill Upload API Service', () => {
  describe('GET /items', () => {
    it('returns a list of medical bills', async () => {
      const res = await request(app).get('/items');
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      res.body.forEach(element => expect(utils.isValidBill(element)));
    });
  });

  describe('POST /items', () => {
    it('creates a new medical bill', async () => {
      const bill = {
        patientName: 'John Doe',
        patientAddress: '123 Main St',
        hospitalName: 'General Hospital',
        dateOfService: '2023-02-11',
        billAmount: 1000
      };
      const res = await request(app).post('/items').send(bill);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(bill);
      expect(utils.isValidBill(res.body))
    });
  });
});
