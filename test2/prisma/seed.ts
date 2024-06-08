import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const users = [];
  for (let i = 0; i < 1000000; i++) {
    users.push({
      firstName: `FirstName${i}`,
      lastName: `LastName${i}`,
      age: Math.floor(Math.random() * 100),
      gender: i % 2 === 0 ? 'male' : 'female',
      problems: Math.random() < 0.5,
    });
  }
  await prisma.user.createMany({ data: users });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
