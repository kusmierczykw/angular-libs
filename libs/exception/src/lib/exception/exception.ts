export abstract class Exception extends Error {
  protected constructor(message: string) {
    super(message);
  }

  public static isInstance<T>(error: T): error is T {
    return error instanceof this;
  }
}
