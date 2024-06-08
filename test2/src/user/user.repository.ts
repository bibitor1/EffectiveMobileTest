import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findAllWithProblems(): Promise<UserEntity[]> {
    return this.prisma.user.findMany({
      where: { problems: true },
    });
  }

  async updateProblemsFlag(): Promise<number> {
    const { count } = await this.prisma.user.updateMany({
      where: { problems: true },
      data: { problems: false },
    });
    return count;
  }

  async countProblemsTrue(): Promise<number> {
    return this.prisma.user.count({
      where: { problems: true },
    });
  }

  async findAllUsers(): Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }
}
