const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation for my application',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./swagger-docs.js'], // Path to the file with Swagger annotations
};

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Setup Swagger UI
const swaggerSetup = swaggerUi.setup(swaggerSpec);

module.exports = {
  swaggerUi,
  swaggerSetup,
};
