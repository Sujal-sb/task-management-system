const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Management System API',
      version: '1.0.0',
      description: 'Complete API documentation for the Task Management System built with MERN stack',
      contact: {
        name: 'AgNext Development Team',
        email: 'support@taskmanagementsystem.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
      {
        url: 'https://api.taskmanagementsystem.com',
        description: 'Production server (replace with actual URL)',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT Bearer token for authentication',
        },
      },
      schemas: {
        User: {
          type: 'object',
          required: ['name', 'email', 'password'],
          properties: {
            _id: {
              type: 'string',
              example: '507f1f77bcf86cd799439011',
            },
            name: {
              type: 'string',
              example: 'John Doe',
            },
            email: {
              type: 'string',
              example: 'john@example.com',
            },
            password: {
              type: 'string',
              description: 'Hashed password (not returned in responses)',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        Task: {
          type: 'object',
          required: ['title', 'userId'],
          properties: {
            _id: {
              type: 'string',
              example: '507f1f77bcf86cd799439012',
            },
            title: {
              type: 'string',
              example: 'Complete project documentation',
            },
            description: {
              type: 'string',
              example: 'Write comprehensive documentation for the API',
            },
            category: {
              type: 'string',
              example: 'Work',
            },
            priority: {
              type: 'string',
              enum: ['Low', 'Medium', 'High'],
              example: 'High',
            },
            status: {
              type: 'string',
              enum: ['Pending', 'In Progress', 'Completed'],
              example: 'In Progress',
            },
            dueDate: {
              type: 'string',
              format: 'date-time',
              nullable: true,
            },
            userId: {
              type: 'string',
              example: '507f1f77bcf86cd799439011',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        AuthToken: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              description: 'JWT token for authentication',
            },
            user: {
              $ref: '#/components/schemas/User',
            },
          },
        },
        TaskStats: {
          type: 'object',
          properties: {
            total: {
              type: 'number',
              example: 10,
            },
            pending: {
              type: 'number',
              example: 5,
            },
            inProgress: {
              type: 'number',
              example: 3,
            },
            completed: {
              type: 'number',
              example: 2,
            },
            highPriority: {
              type: 'number',
              example: 2,
            },
            mediumPriority: {
              type: 'number',
              example: 5,
            },
            lowPriority: {
              type: 'number',
              example: 3,
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Error message',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
