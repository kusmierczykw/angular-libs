import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'icon',
    loadComponent: () =>
      import('./examples/icon-example.component').then(
        (c) => c.IconExampleComponent,
      ),
  },
];
