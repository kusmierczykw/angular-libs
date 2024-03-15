import { Exception } from './exception';

export class EntryNotFoundException extends Exception {
  public constructor(message = 'The entry not found.') {
    super(message);
  }
}
