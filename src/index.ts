import express from 'express';
import cors from 'cors';
import { connectDatabase } from './infrastructure/database/mongoose';
import config from './infrastructure/config';
import { setupRoutes } from './infrastructure/routes';
import { errorHandler } from './interfaces/middlewares/errorHandlerMiddleware';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
setupRoutes(app);

// Error handling middleware
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    await connectDatabase();
    
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();