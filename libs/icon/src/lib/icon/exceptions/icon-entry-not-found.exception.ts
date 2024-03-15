import { Exception } from '@angular-starter-pack/exception';

export class IconEntryNotFoundException extends Exception {
  public constructor(message = 'Icon entry not found.') {
    super(message);
  }
}
