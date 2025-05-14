import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    // expiresIn can be a number (in seconds) or a string like '2 days', '10h', '7d'
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  }
};