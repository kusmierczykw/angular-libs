import { map, OperatorFunction } from 'rxjs';

export const negate = (): OperatorFunction<boolean, boolean> =>
  map(value => !value);
