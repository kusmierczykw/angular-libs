export class RouterLinkEntryNotFoundException extends Error {
  public constructor(name: string) {
    super(`The route entry "${name}" not found.`);
  }
}
