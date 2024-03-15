import { Pipe, PipeTransform } from '@angular/core';
import { RouterLinkProviderService } from '../../../index';
import { Route } from '../enums/route';
import { Nillable } from '@angular-starter-pack/nil';
import { RouterLinkParams } from '../../../index';
import { RouterLink } from '../types/router-link';

@Pipe({
  name: 'routerLink',
  standalone: true,
})
export class RouterLinkPipe implements PipeTransform {
  public constructor(private readonly provider: RouterLinkProviderService) {}

  public transform(
    route: Route,
    params: Nillable<RouterLinkParams> = null,
  ): RouterLink {
    return this.provider.routerLink(route, params);
  }
}
