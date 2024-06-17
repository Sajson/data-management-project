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
  @ApiOperation({ summary: 'Pobierz wszystkie zamowienia' })
  @ApiResponse({
    status: 200,
    description: 'Lista wszystkich zamowien',
    type: [Order],
  })
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz zamowienie wedlug ID' })
  @ApiResponse({
    status: 200,
    description: 'Zamowienie zostalo znalezione',
    type: Order,
  })
  findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Utworz nowe zamowienie' })
  @ApiResponse({
    status: 201,
    description: 'Zamowienie zostalo utworzone',
    type: Order,
  })
  create(@Body() order: Partial<Order>): Promise<Order> {
    return this.ordersService.create(order);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Aktualizuj zamowienie' })
  @ApiResponse({
    status: 200,
    description: 'Zamowienie zostalo zaktualizowane',
    type: Order,
  })
  update(
    @Param('id') id: string,
    @Body() order: Partial<Order>,
  ): Promise<Order> {
    return this.ordersService.update(+id, order);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usun zamowienie' })
  @ApiResponse({
    status: 204,
    description: 'Zamowienie zostalo usuniete',
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.ordersService.remove(+id);
  }
}
