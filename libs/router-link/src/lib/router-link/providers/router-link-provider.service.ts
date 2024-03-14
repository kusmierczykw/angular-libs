import { Injectable } from '@angular/core';
import { Route } from '../enums/route';
import { RouterLinkWithParts } from '../types/router-link-with-parts';
import { RouteFragment } from '../enums/route-fragment';
import { isNil, Nillable } from '@angular-libs/nil';
import { RouterLinkParams } from '../types/router-link-params';
import { RouterLink } from '../types/router-link';
import { RouteParamsNotFoundExceptions } from '../exceptions/route-params-not-found.exceptions';
import { RouteParamNotFoundException } from '../exceptions/route-param-not-found.exception';
import { RouterPart } from '../types/router-part';
import { RouteParam } from '../enums/route-param';
import { RouterLinkEntryNotFoundException } from '../exceptions/router-link-entry-not-found.exception';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkProviderService {
  /* prettier-ignore */
  private readonly entries = new Map<Route, RouterLinkWithParts>([
    [Route.Root, [RouteFragment.Root]],
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
