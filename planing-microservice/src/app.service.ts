import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { ForcastProductEvent } from './forcast-product.event';
import { PlaningEvent } from './planing.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - FORCAST', data);
    //TODO EMAIL THE USER
  }
  handleForcastProduct(data: ForcastProductEvent) {
    console.log('handleForcastProduct - FORCAST');
    console.log('Product Name:', data.name);
    console.log('Product Price:', data.price);
    console.log('Product Store:', data.store);
  }
  handlePlaning(data: PlaningEvent) {
    console.log('handlePlaning - PLANING');
    console.log('Product Name:', data.name);
    console.log('Product Price:', data.price);
    console.log('Product Store:', data.store);
  }
}
