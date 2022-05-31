import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';
import { ForcastProductRequest } from './forcast-product.dto';
import { ForcastProductEvent } from './forcast-product.event';
import { PlanningRequest } from './planing.dto';
import { PlaningEvent } from './planing.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  private readonly products: any[] = [];
  private readonly plans: any[] = [];
  constructor(
    @Inject('FORCASTING') private readonly communicationClient: ClientProxy,
    @Inject('SECURITY') private readonly securityClient: ClientProxy,
    @Inject('PLANING') private readonly planingClient: ClientProxy,
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
    this.products.push(forcastProductRequest);
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
  planing(planingRequest: PlanningRequest) {
    this.plans.push(planingRequest);
    this.planingClient.emit(
      'user_created',
      new PlaningEvent(
        planingRequest.name,
        planingRequest.price,
        planingRequest.store,
      ),
    );
  }
  getPlaningResult() {
    return this.planingClient.send({ cmd: 'get_planing' }, {});
  }
}
