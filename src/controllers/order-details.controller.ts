import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderDetailsService } from '../services/order-details.service';
import { OrderDetail } from '../entities/order-detail.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('order-details')
@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Get()
  @ApiOperation({ summary: 'Pobierz wszystkie szczegoly zamowien' })
  @ApiResponse({
    status: 200,
    description: 'Zwraca liste szczegolow zamowien',
    type: OrderDetail,
    isArray: true,
  })
  findAll(): Promise<OrderDetail[]> {
    return this.orderDetailsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz szczegoly zamowienia po id' })
  @ApiResponse({
    status: 200,
    description: 'Zwraca szczegoly zamowienia',
    type: OrderDetail,
  })
  findOne(@Param('id') id: string): Promise<OrderDetail> {
    return this.orderDetailsService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Stworz szczegoly zamowienia' })
  @ApiResponse({
    status: 201,
    description: 'Zwraca stworzone szczegoly zamowienia',
    type: OrderDetail,
  })
  create(@Body() orderDetail: Partial<OrderDetail>): Promise<OrderDetail> {
    return this.orderDetailsService.create(orderDetail);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Zaktualizuj szczegoly zamowienia' })
  @ApiResponse({
    status: 200,
    description: 'Zwraca zaktualizowane szczegoly zamowienia',
    type: OrderDetail,
  })
  update(
    @Param('id') id: string,
    @Body() orderDetail: Partial<OrderDetail>,
  ): Promise<OrderDetail> {
    return this.orderDetailsService.update(+id, orderDetail);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usun szczegoly zamowienia' })
  @ApiResponse({
    status: 204,
    description: 'Usunieto szczegoly zamowienia',
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.orderDetailsService.remove(+id);
  }
}
