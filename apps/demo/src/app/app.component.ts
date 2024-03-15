import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route, RouterLinkPipe } from '@angular-starter-pack/router-link';
import { MenuItemBuilder } from '@angular-starter-pack/menu';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLinkPipe],
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public constructor(private readonly builder: MenuItemBuilder) {}

  public readonly routes = signal([
    this.builder
      .initRouterLink((provider) => provider.routerLink(Route.Root))
      .label('Home')
      .build(),

    this.builder
      .initRouterLink((provider) => provider.routerLink(Route.Icon))
      .label('Icon')
      .build(),
  ]);
}
