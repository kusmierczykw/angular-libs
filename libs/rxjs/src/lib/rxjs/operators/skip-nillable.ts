import { filter, MonoTypeOperatorFunction } from 'rxjs';
import { isNil, Nillable } from '@angular-libs/nil';

export const skipNillable = <Arg>(): MonoTypeOperatorFunction<Nillable<Arg>> =>
  filter((arg: Nillable<Arg>) => !isNil(arg));
