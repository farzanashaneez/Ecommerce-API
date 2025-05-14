import jwt from 'jsonwebtoken';
import { TokenService } from '../../core/interfaces/services/tokenService';
import config from '../config';

export class JwtTokenService implements TokenService {
  generate(payload: object): string {
    return jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn as jwt.SignOptions['expiresIn']
    });
  }

  verify(token: string): any {
    return jwt.verify(token, config.jwt.secret);
  }
}