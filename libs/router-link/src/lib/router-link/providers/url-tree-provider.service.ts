import { Injectable } from '@angular/core';
import { Params, Router, UrlTree } from '@angular/router';
import { RouterLinkProviderService } from '../../../index';
import { Route } from '../enums/route';
import { Nillable } from '@angular-starter-pack/nil';

@Injectable({
  providedIn: 'root',
})
export class UrlTreeProviderService {
  public constructor(
    private readonly provider: RouterLinkProviderService,
    private readonly router: Router,
  ) {}

  public urlTree(path: Route, params?: Nillable<Params>): UrlTree {
    return this.router.createUrlTree(this.provider.routerLink(path, params));
  }
}
