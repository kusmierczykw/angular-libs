import { Exception } from '@angular-starter-pack/exception';

export class RouterLinkEntryNotFoundException extends Exception {
  public constructor(name: string) {
    super(`The route entry "${name}" not found.`);
  }
}
