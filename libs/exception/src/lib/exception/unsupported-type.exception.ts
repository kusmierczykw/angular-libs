import { Exception } from './exception';

export class UnsupportedTypeException extends Exception {
  public constructor(message = 'Unsupported type.') {
    super(message);
  }
}
