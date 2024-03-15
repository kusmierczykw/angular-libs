export class RequiredInputParameterException extends Error {
  public constructor(name: string) {
    super(`The @Input() parameter "${name}" must be passed.`);
  }
}
