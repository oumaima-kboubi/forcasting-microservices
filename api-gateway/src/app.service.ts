import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';
import { ForcastProductRequest } from './forcast-product.dto';
import { ForcastProductEvent } from './forcast-product.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  constructor(
    @Inject('FORCASTING') private readonly communicationClient: ClientProxy,
    @Inject('SECURITY') private readonly securityClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    this.communicationClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
    this.securityClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
  }
  getSecurity() {
    return this.securityClient.send({ cmd: 'get_security' }, {});
  }
  forcastProduct(forcastProductRequest: ForcastProductRequest) {
    this.users.push(forcastProductRequest);
    this.communicationClient.emit(
      'forcast_product',
      new ForcastProductEvent(
        forcastProductRequest.name,
        forcastProductRequest.price,
        forcastProductRequest.store,
      ),
    );
    this.securityClient.emit(
      'forcast_product',
      new ForcastProductEvent(
        forcastProductRequest.name,
        forcastProductRequest.price,
        forcastProductRequest.store,
      ),
    );
  }
  getForcastProductResult() {
    return this.securityClient.send({ cmd: 'get_forcast_result' }, {});
  }
}
