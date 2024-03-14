import { map, Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteParam } from '../enums/route-param';
import { isNil, Nillable } from '@angular-libs/nil';

export const activatedRouteParamAsString = (
  param: RouteParam,
): Observable<Nillable<string>> => {
  const activatedRoute = inject(ActivatedRoute);

  return activatedRoute.paramMap.pipe(map((params) => params.get(param)));
};

export const activatedRouteParamAsNumber = (
  param: RouteParam,
): Observable<Nillable<number>> =>
  activatedRouteParamAsString(param).pipe(
    map((value) => (isNil(value) ? null : Number(value))),
  );
