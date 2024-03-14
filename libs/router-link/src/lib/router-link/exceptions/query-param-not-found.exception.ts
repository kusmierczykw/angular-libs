export class QueryParamNotFoundException extends Error {
  public constructor(key: string) {
    super(`Query param with key "${key}" not found.`);
  }
}
