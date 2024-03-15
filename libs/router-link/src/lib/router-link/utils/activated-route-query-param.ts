import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { inject } from '@angular/core';
import { RouteQueryParam } from '../enums/route-query-param';
import { isNil, Nillable } from '@angular-starter-pack/nil';

export const activatedRouteQueryParamAsString = (
  queryParam: RouteQueryParam,
): Observable<Nillable<string>> => {
  const activatedRoute = inject(ActivatedRoute);

  return activatedRoute.queryParamMap.pipe(
    map((queryParams) => queryParams.get(queryParam)),
  );
};

export const activatedRouteQueryParamAsStringArray = (
  queryParam: RouteQueryParam,
): Observable<string[]> => {
  const activatedRoute = inject(ActivatedRoute);

  return activatedRoute.queryParamMap.pipe(
    map((queryParams) => queryParams.getAll(queryParam)),
  );
};

export const activatedRouteQueryParamAsDictionary = <
  Dictionary,
  Enum extends object,
>(
  queryParam: RouteQueryParam,
  type: Enum,
): Observable<Nillable<Dictionary>> => {
  const activatedRoute = inject(ActivatedRoute);

  return activatedRoute.queryParamMap.pipe(
    map((queryParams) => {
      const value = <Nillable<Dictionary>>queryParams.get(queryParam);

      if (Object.values(type).includes(value)) {
        return value;
      }

      return;
    }),
  );
};

export const activatedRouteQueryParamAsNumber = (
  queryParam: RouteQueryParam,
): Observable<Nillable<number>> =>
  activatedRouteQueryParamAsString(queryParam).pipe(
    map((value) => (isNil(value) ? null : Number(value))),
  );

export const activatedRouteQueryParamAsNumberArray = (
  queryParam: RouteQueryParam,
): Observable<number[]> =>
  activatedRouteQueryParamAsStringArray(queryParam).pipe(
    map((values) => values.map(Number)),
  );
