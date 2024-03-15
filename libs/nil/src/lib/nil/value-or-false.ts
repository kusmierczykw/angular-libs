import { Nillable } from './nillable';
import { isNil } from './is-nil';

export function valueOrFalse<Type>(value: Nillable<Type>): Type | false {
  if (isNil(value)) {
    return false;
  }

  return value;
}
