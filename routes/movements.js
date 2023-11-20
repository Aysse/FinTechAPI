import { Router } from 'express';
import { MovementController } from '../controllers/movements.js';

export const createMovementRouter = ({ movementModel }) => {
  const movementsRouter = Router();

  const movementController = new MovementController({ movementModel });

  movementsRouter.get('/:accountId', movementController.getByAccount);

  return movementsRouter;
};
