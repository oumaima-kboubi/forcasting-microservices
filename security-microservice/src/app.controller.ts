import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user.event';
import { ForcastProductEvent } from './forcast-product.event';

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

  @MessagePattern({ cmd: 'get_security' })
  getSecurity() {
    return this.appService.getSecurity();
  }

  @EventPattern('forcast_product')
  handleForcastProduct(data: ForcastProductEvent) {
    this.appService.handleForcastProduct(data);
  }

  @MessagePattern({ cmd: 'get_forcast_result' })
  getForcastResult() {
    return this.appService.getForcastResult();
  }
}
