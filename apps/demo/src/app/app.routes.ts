import { Route } from '@angular/router';
import { RouteFragment } from '@angular-starter-pack/router-link';

export const appRoutes: Route[] = [
  {
    path: RouteFragment.Icon,
    loadComponent: () =>
      import('./examples/icon-example.component').then(
        (c) => c.IconExampleComponent,
      ),
  },
];
