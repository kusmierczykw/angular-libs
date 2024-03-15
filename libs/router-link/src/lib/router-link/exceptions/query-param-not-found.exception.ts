import { Exception } from '@angular-starter-pack/exception';

export class QueryParamNotFoundException extends Exception {
  public constructor(key: string) {
    super(`Query param with key "${key}" not found.`);
  }
}
