import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('fix-problems')
  async fixProblems(): Promise<{ count: number }> {
    const count = await this.userService.updateProblemsFlag();
    return { count };
  }

  @Get('problems-true-count')
  async getProblemsTrueCount(): Promise<{ count: number }> {
    const count = await this.userService.countProblemsTrue();
    return { count };
  }
}
