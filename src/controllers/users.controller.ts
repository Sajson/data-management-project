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
  @ApiOperation({ summary: 'Pobierz wszystkich użytkowników' })
  @ApiResponse({
    status: 200,
    description: 'Lista wszystkich użytkowników',
    type: [User],
  })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz użytkownika według ID' })
  @ApiResponse({
    status: 200,
    description: 'Użytkownik został znaleziony',
    type: User,
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Utwórz nowego użytkownika' })
  @ApiResponse({
    status: 201,
    description: 'Użytkownik został utworzony',
    type: User,
  })
  create(@Body() user: Partial<User>): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Aktualizuj użytkownika' })
  @ApiResponse({
    status: 200,
    description: 'Użytkownik został zaktualizowany',
    type: User,
  })
  update(@Param('id') id: string, @Body() user: Partial<User>): Promise<User> {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usuń użytkownika' })
  @ApiResponse({
    status: 200,
    description: 'Użytkownik został usunięty',
    type: User,
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id);
  }
}
