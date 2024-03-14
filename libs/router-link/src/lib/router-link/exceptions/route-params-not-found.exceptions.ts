export class RouteParamsNotFoundExceptions extends Error {
  public constructor(message = 'Route params not found.') {
    super(message);
  }
}
