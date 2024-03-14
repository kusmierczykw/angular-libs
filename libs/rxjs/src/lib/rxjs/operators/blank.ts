import { map, OperatorFunction } from 'rxjs';

export const blank = <T>(): OperatorFunction<T, void> => map(() => void 0);
