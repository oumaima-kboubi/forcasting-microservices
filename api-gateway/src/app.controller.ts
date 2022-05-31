import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';
import { ForcastProductRequest } from './forcast-product.dto';
import { PlanningRequest } from './planing.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  createuser(@Body() createUserRequest: CreateUserRequest) {
    this.appService.createUser(createUserRequest);
  }

  @Get('security')
  getSecurity() {
    return this.appService.getSecurity();
  }

  @Post('forcast')
  forcastProduct(@Body() forcastProductRequest: ForcastProductRequest) {
    this.appService.forcastProduct(forcastProductRequest);
  }

  @Get('forcastResult')
  getForcastProductResult() {
    this.appService.getForcastProductResult();
  }

  @Post('planing')
  planing(@Body() planingRequest: PlanningRequest) {
    this.appService.planing(planingRequest);
  }

  @Get('planingResult')
  getPlaningResult() {
    this.appService.getPlaningResult();
  }
}
