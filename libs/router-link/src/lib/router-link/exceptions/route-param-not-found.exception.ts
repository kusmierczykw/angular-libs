import { Exception } from '@angular-starter-pack/exception';

export class RouteParamNotFoundException extends Exception {
  public constructor(name: string) {
    super(`The route param "${name}" not found.`);
  }
}
