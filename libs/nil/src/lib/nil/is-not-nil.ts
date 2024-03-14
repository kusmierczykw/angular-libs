import { Nillable } from '@core/utils/nil/nil';
import { isNil } from '@core/utils/nil/is-nil';

export function isNotNil<Type>(
  predictable: Nillable<Type>,
): predictable is Type {
  return !isNil(predictable);
}
