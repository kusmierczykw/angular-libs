import { Injectable } from '@angular/core';
import { Route } from '../enums/route';
import {
  RouteFragment,
  RouteParamNotFoundException,
  RouteParamsNotFoundExceptions,
  RouterLinkEntryNotFoundException,
  RouterLinkParams,
  RouterLinkWithParts,
} from '../../../index';
import { isNil, Nillable } from '@angular-starter-pack/nil';
import { RouterLink } from '../types/router-link';
import { RouterPart } from '../types/router-part';
import { RouteParam } from '../enums/route-param';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkProviderService {
  /* prettier-ignore */
  private readonly entries = new Map<Route, RouterLinkWithParts>([
    [Route.Root, [RouteFragment.Root]],
    [Route.Icon, [RouteFragment.Root, RouteFragment.Icon]],
  ]);

  public routerLink(
    route: Route,
    params: Nillable<RouterLinkParams> = null,
  ): RouterLink {
    const routerLinkWithParams = this.entries.get(route);

    if (isNil(routerLinkWithParams)) {
      const name = Route[route];

      throw new RouterLinkEntryNotFoundException(name);
    }

    return this.replaceParams(routerLinkWithParams, params);
  }

  private replaceParams(
    routerLinkWithParts: RouterLinkWithParts,
    params: Nillable<RouterLinkParams>,
  ): RouterLink {
    return routerLinkWithParts.map((part) => {
      if (this.isRouteParam(part)) {
        if (isNil(params)) {
          throw new RouteParamsNotFoundExceptions();
        }

        const param = params[part];

        if (isNil(param)) {
          throw new RouteParamNotFoundException(part);
        }

        return param;
      }

      return part;
    });
  }

  private isRouteParam(part: RouterPart): part is RouteParam {
    const availableParams = Object.values(RouteParam) as string[];

    return availableParams.includes(part);
  }
}
