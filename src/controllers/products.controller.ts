import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { Product } from '../entities/product.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Pobierz wszystkie produkty' })
  @ApiResponse({
    status: 200,
    description: 'Lista wszystkich produktów',
    type: [Product],
  })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz produkt według ID' })
  @ApiResponse({
    status: 200,
    description: 'Produkt został znaleziony',
    type: Product,
  })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Utwórz nowy produkt' })
  @ApiResponse({
    status: 201,
    description: 'Produkt został utworzony',
    type: Product,
  })
  create(@Body() product: Partial<Product>): Promise<Product> {
    return this.productsService.create(product);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Aktualizuj produkt' })
  @ApiResponse({
    status: 200,
    description: 'Produkt został zaktualizowany',
    type: Product,
  })
  update(
    @Param('id') id: string,
    @Body() product: Partial<Product>,
  ): Promise<Product> {
    return this.productsService.update(+id, product);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usuń produkt' })
  @ApiResponse({
    status: 204,
    description: 'Produkt został usunięty',
  })
  remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(+id);
  }
}
