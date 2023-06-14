import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  all() {
    return this.usersService.all();
  }

  @Get()
  findById(id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() userData: { email: string; name: string; password: string }) {
    return this.usersService.create(userData);
  }
}
