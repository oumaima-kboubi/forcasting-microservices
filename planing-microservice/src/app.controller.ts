import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';
import { ForcastProductEvent } from './forcast-product.event';
import { PlaningEvent } from './planing.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent) {
    this.appService.handleUserCreated(data);
  }
  @EventPattern('forcast_product')
  handleForcastProduct(data: ForcastProductEvent) {
    this.appService.handleForcastProduct(data);
  }
  @EventPattern('planing')
  handlePlaning(data: PlaningEvent) {
    this.appService.handlePlaning(data);
  }
}
