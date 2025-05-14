import bcrypt from 'bcryptjs';
import { PasswordService } from '../../core/interfaces/services/passwordService';

export class BcryptPasswordService implements PasswordService {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}