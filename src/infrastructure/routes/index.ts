import { Express } from 'express';
import authRoutes from './authRoutes';
// import productRoutes from './productRoutes';
// import cartRoutes from './cartRoutes';
// import orderRoutes from './orderRoutes';

export const setupRoutes = (app: Express): void => {
  app.use('/api/auth', authRoutes);
//   app.use('/api/products', productRoutes);
//   app.use('/api/cart', cartRoutes);
//   app.use('/api/orders', orderRoutes);
};