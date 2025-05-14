import { Request, Response, NextFunction } from 'express';
import { JwtTokenService } from '../../infrastructure/services/tokenService';

const tokenService = new JwtTokenService();

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void | Response => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: No token provided'
      });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = tokenService.verify(token);
    
    // Add user info to request
    req.user = decoded;
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid token'
    });
  }
};