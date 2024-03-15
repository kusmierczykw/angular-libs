import { Nillable } from './nillable';
import { isNil } from './is-nil';

export function valueOrNull<Type>(value: Nillable<Type>): Type | null {
  if (isNil(value)) {
    return null;
  }

  return value;
}
