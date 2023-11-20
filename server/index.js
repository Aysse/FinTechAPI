import express, { json } from 'express';
import { createMovementRouter } from '../routes/movements.js';

export const createApp = ({ movementModel }) => {
  const app = express();

  app.use(json());
  // delete express header
  app.disable('x-powered-by');

  app.use('/movements', createMovementRouter({ movementModel }));

  const PORT = process.env.PORT ?? 3000;

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
