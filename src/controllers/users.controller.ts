import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Pobierz wszystkich uzytkownikow' })
  @ApiResponse({
    status: 200,
    description: 'Lista wszystkich uzytkownikow',
    type: [User],
  })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz uzytkownika wedlug ID' })
  @ApiResponse({
    status: 200,
    description: 'Uzytkownik zostal znaleziony',
    type: User,
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Utworz nowego uzytkownika' })
  @ApiResponse({
    status: 201,
    description: 'Uzytkownik zostal utworzony',
    type: User,
  })
  create(@Body() user: Partial<User>): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Aktualizuj uzytkownika' })
  @ApiResponse({
    status: 200,
    description: 'Uzytkownik zostal zaktualizowany',
    type: User,
  })
  update(@Param('id') id: string, @Body() user: Partial<User>): Promise<User> {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usun uzytkownika' })
  @ApiResponse({
    status: 200,
    description: 'Uzytkownik zostal usuniety',
    type: User,
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id);
  }
}
