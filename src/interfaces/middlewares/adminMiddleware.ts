import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../../core/entities/userEntity';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction): void | Response => {
  if (req.user && req.user.role === UserRole.ADMIN) {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: 'Forbidden: Admin access required'
    });
  }
};