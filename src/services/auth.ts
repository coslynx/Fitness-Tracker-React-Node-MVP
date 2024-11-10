import bcrypt from 'bcrypt';
import { Redis } from 'ioredis';
import jsonwebtoken from 'jsonwebtoken';
import apiService from './api';

class AuthService {
  private redisClient: Redis;
  private jwtSecret: string;

  constructor() {
    this.redisClient = new Redis(process.env.REDIS_URL);
    this.jwtSecret = process.env.JWT_SECRET || '';
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const sanitizedEmail = email.trim().toLowerCase();
      const user = await apiService.getUser(sanitizedEmail);
      if (!user) {
        throw new Error('Invalid email or password.');
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Invalid email or password.');
      }
      const token = this.generateJWT(user);
      await this.redisClient.set(token, user.id, 'EX', 3600); // Token expiry in 1 hour
      return { token, user };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async register(userData: any): Promise<any> {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const createdUser = await apiService.createUser({ ...userData, password: hashedPassword });
      const token = this.generateJWT(createdUser);
      await this.redisClient.set(token, createdUser.id, 'EX', 3600); // Token expiry in 1 hour
      return { token, user: createdUser };
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  async logout(token: string): Promise<void> {
    try {
      await this.redisClient.del(token);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  private generateJWT(user: any): string {
    const payload = {
      userId: user.id,
      email: user.email
    };
    return jsonwebtoken.sign(payload, this.jwtSecret);
  }
}

const authService = new AuthService();
export default authService;