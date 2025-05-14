import { Router } from 'express';
import { AuthController } from '../../interfaces/controllers/authController';
import { RegisterUserUseCase } from '../../use-cases/auth/registerUserUseCase';
import { LoginUserUseCase } from '../../use-cases/auth/loginUserUseCase';
import { MongooseUserRepository } from '../../interfaces/repositories/mongoose/mongoUserRepository';
import { BcryptPasswordService } from '../services/passwordService';
import { JwtTokenService } from '../services/tokenService';

const router = Router();

// Dependencies
const userRepository = new MongooseUserRepository();
const passwordService = new BcryptPasswordService();
const tokenService = new JwtTokenService();

// Use cases
const registerUserUseCase = new RegisterUserUseCase(userRepository, passwordService);
const loginUserUseCase = new LoginUserUseCase(userRepository, passwordService, tokenService);

// Controller
const authController = new AuthController(registerUserUseCase, loginUserUseCase);

// Routes
router.post('/register', (req, res)=> {
    authController.register(req, res);
  });
  
  router.post('/login', (req, res)=> {
    authController.login(req, res);
  });
export default router;