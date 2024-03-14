export class RouteParamNotFoundException extends Error {
  public constructor(name: string) {
    super(`The route param "${name}" not found.`);
  }
}
