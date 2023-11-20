import { expect } from 'chai';
import { MovementModel } from '../../models/mysql/movement.js';
import { describe, it } from 'mocha';

describe('MovementModel', () => {
  it('should get movements by account', async () => {
    const movementModel = new MovementModel(/* Mocked connection */);

    const result = await movementModel.getByAccount({ accountId: 1 });

    expect(result).to.be.an('array');
  });
  // TODO: Complete tests
});
