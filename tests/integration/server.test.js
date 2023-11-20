import { expect } from 'chai';
import request from 'supertest';
import { createApp } from '../../server/index.js';
import { describe, it } from 'mocha';

describe('Server Integration Tests', () => {
  it('should handle GET /movements/:accountId', async () => {
    const movementModelMock = {
      getByAccount: async () => [{ movement_type: 'Ingreso', amount: 100 }]
    };
    const app = createApp({ movementModel: movementModelMock });

    const response = await request(app).get('/movements/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
});
