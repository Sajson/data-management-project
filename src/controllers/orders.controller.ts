import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { Order } from '../entities/order.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOperation({ summary: 'Pobierz wszystkie zamówienia' })
  @ApiResponse({
    status: 200,
    description: 'Lista wszystkich zamówień',
    type: [Order],
  })
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz zamówienie według ID' })
  @ApiResponse({
    status: 200,
    description: 'Zamówienie zostało znalezione',
    type: Order,
  })
  findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Utwórz nowe zamówienie' })
  @ApiResponse({
    status: 201,
    description: 'Zamówienie zostało utworzone',
    type: Order,
  })
  create(@Body() order: Partial<Order>): Promise<Order> {
    return this.ordersService.create(order);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Aktualizuj zamówienie' })
  @ApiResponse({
    status: 200,
    description: 'Zamówienie zostało zaktualizowane',
    type: Order,
  })
  update(
    @Param('id') id: string,
    @Body() order: Partial<Order>,
  ): Promise<Order> {
    return this.ordersService.update(+id, order);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usuń zamówienie' })
  @ApiResponse({
    status: 204,
    description: 'Zamówienie zostało usunięte',
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.ordersService.remove(+id);
  }
}
