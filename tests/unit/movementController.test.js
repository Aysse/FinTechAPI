import { expect } from 'chai';
import { MovementController } from '../../controllers/movements.js';
import { describe, it } from 'mocha';

describe('MovementController', () => {
  it('should get movements by account', async () => {
    const movementModelMock = {
      getByAccount: async () => [{ movement_type: 'credit', amount: 100 }]
    };
    const movementController = new MovementController({ movementModel: movementModelMock });

    // Simular una solicitud Express
    const req = { params: { accountId: 1 } };
    const res = {
      json: (data) => {
        expect(data).to.be.an('array');
        // Agregar más aserciones según sea necesario
      },
      status: (code) => {
        expect(code).to.equal(200);
        return res;
      }
    };
    await movementController.getByAccount(req, res);
  });
});
