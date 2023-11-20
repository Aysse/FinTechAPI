import { createApp } from './server/index.js';

import { MovementModel } from './models/mysql/movement.js';

createApp({ movementModel: MovementModel });
