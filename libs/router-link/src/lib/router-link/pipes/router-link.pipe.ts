import { Pipe, PipeTransform } from '@angular/core';
import { RouterLinkProviderService } from '../providers/router-link-provider.service';
import { Route } from '../enums/route';
import { Nillable } from '@angular-libs/nil';
import { RouterLinkParams } from '../types/router-link-params';
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
