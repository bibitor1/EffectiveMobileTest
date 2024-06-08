import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async updateProblemsFlag(): Promise<number> {
    const usersWithProblems = await this.userRepository.findAllWithProblems();
    await this.userRepository.updateProblemsFlag();
    return usersWithProblems.length;
  }

  async countProblemsTrue(): Promise<number> {
    return this.userRepository.countProblemsTrue();
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.findAllUsers();
  }
}
