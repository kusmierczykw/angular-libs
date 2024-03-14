import { Nillable } from '@core/utils/nil/nil';
import { isNil } from '@core/utils/nil/is-nil';

export function valueOrNull<Type>(value: Nillable<Type>): Type | null {
  if (isNil(value)) {
    return null;
  }

  return value;
}
