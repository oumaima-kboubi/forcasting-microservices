import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { ForcastProductEvent } from './forcast-product.event';

@Injectable()
export class AppService {
  private readonly security: any[] = [];
  private readonly forcastProductTable: any[] = [];
  private readonly forcastProductResult: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - SECURITY User', data);
    this.security.push({
      email: data.email,
      timestamp: new Date(),
    });
  }

  getSecurity() {
    return this.security;
  }

  handleForcastProduct(data: ForcastProductEvent) {
    console.log('handleForcastProduct - SECURITY', data);
    console.log('i am handling forcat');
    this.forcastProductTable.push({
      name: data.name,
      price: data.price,
      timestamp: new Date(),
    });
    console.log('i pushed the data ');
  }

  getForcastResult() {
    /* console.log('i am hereeee');
    let max = 0;
    for (let i = 0; i < this.forcastProductTable.length; i++) {
      if (this.forcastProductTable[i].price >= max) {
        max = this.forcastProductTable[i].price;
      }
    }
    console.log('max: ', max);
    return { forcastResult: max };*/
    return this.forcastProductResult;
  }
}
