import { Nillable } from './nillable';
import { Nil } from './nil';

export function isNil<Type>(predictable: Nillable<Type>): predictable is Nil {
  return predictable === undefined || predictable === null;
}
