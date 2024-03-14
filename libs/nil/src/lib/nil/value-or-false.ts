import { Nillable } from '@core/utils/nil/nil';
import { isNil } from '@core/utils/nil/is-nil';

export function valueOrFalse<Type>(value: Nillable<Type>): Type | false {
  if (isNil(value)) {
    return false;
  }

  return value;
}
