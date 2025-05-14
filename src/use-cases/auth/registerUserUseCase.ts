import { User, UserRole } from '../../core/entities/userEntity';
import { UserRepository } from '../../core/interfaces/repositories/userRepositoryInterfce';
import { PasswordService } from '../../core/interfaces/services/passwordService';

export class RegisterUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private passwordService: PasswordService
  ) {}

  async execute(userData: Omit<User, 'id' | 'role' | 'createdAt' | 'updatedAt'>): Promise<User> {
    // Check if user already exists
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await this.passwordService.hash(userData.password);

    // Create user
    const user: User = {
      ...userData,
      password: hashedPassword,
      role: UserRole.CUSTOMER
    };

    return this.userRepository.create(user);
  }
}