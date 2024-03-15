import { Nillable } from './nillable';
import { isNil } from './is-nil';

export function valueOrUndefined<Type>(
  value: Nillable<Type>,
): Type | undefined {
  if (isNil(value)) {
    return undefined;
  }

  return value;
}
