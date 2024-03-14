import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { RouterLinkProviderService } from '../providers/router-link-provider.service';
import { Nillable, valueOrUndefined } from '@angular-libs/nil';
import { RouterLink } from '../types/router-link';
import { blank } from '@angular-libs/rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigatorService {
  public constructor(
    private readonly provider: RouterLinkProviderService,
    private readonly router: Router,
  ) {}

  public navigateByCustomLink(
    link: string,
    extras?: Nillable<NavigationExtras>,
  ): void {
    void this.router.navigateByUrl(
      this.router.parseUrl(link),
      valueOrUndefined(extras),
    );
  }

  public navigateByRouterLink(
    routerLink: (provider: RouterLinkProviderService) => RouterLink,
    extras?: Nillable<NavigationExtras>,
  ): void {
    void this.router.navigate(
      routerLink(this.provider),
      valueOrUndefined(extras),
    );
  }

  public navigateByRouterLinkAsync(
    routerLink: (provider: RouterLinkProviderService) => RouterLink,
    extras?: Nillable<NavigationExtras>,
  ): Observable<void> {
    return fromPromise(
      this.router.navigate(routerLink(this.provider), valueOrUndefined(extras)),
    ).pipe(blank());
  }
}
