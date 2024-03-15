import { Exception } from '@angular-starter-pack/exception';

export class RouteParamsNotFoundExceptions extends Exception {
  public constructor(message = 'Route params not found.') {
    super(message);
  }
}
