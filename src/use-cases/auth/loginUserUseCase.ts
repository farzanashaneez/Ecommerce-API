import { User } from '../../core/entities/userEntity';
import { UserRepository } from '../../core/interfaces/repositories/userRepositoryInterfce';
import { PasswordService } from '../../core/interfaces/services/passwordService';
import { TokenService } from '../../core/interfaces/services/tokenService';

export class LoginUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordService: PasswordService,
    private tokenService: TokenService
  ) {}

  async execute(email: string, password: string): Promise<{ user: Omit<User, 'password'>, token: string }> {
    // Find user by email
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await this.passwordService.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generate token
    const token = this.tokenService.generate({ userId: user.id!, role: user.role });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
  }
}