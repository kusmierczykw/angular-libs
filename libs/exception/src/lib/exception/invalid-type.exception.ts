import { Exception } from './exception';

export class InvalidTypeException extends Exception {
  public constructor(messsage = 'Invalid type.') {
    super(messsage);
  }
}
