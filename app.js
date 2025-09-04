const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const userController = require('./controller/userController');
const transferController = require('./controller/transferController');

const app = express();
app.use(express.json());

// Rotas principais
app.use('/api/users', userController);
app.use('/api/transfers', transferController);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;