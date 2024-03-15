import { Exception } from './exception';

export class NotFoundException extends Exception {
  public constructor(message = 'Not found.') {
    super(message);
  }
}
