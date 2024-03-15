import { Exception } from './exception';

export class RequiredMethodCallException extends Exception {
  public constructor(name: string) {
    super(`The method ${name} must be call.`);
  }
}
