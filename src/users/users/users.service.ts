import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.user.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  create(userData: { email: string; name: string; password: string }) {
    return this.prismaService.user.create({
      data: {
        email: userData.email,
        name: userData.name,
        //Should hash password here. But for now, just store it as is.
        password: userData.password,
      },
    });
  }
}
