import { Nillable } from './nillable';
import { isNil } from './is-nil';

export function isNotNil<Type>(
  predictable: Nillable<Type>,
): predictable is Type {
  return !isNil(predictable);
}
