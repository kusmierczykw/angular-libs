import { Observable } from 'rxjs';
import { MenuItemType } from '../enums/menu-item-type';
import {
  RouterLink,
  RouterLinkActiveOptions,
} from '@angular-starter-pack/router-link';
import { isNil, Nillable } from '@angular-starter-pack/nil';
import { MenuItemCommand } from '../types/menu-item-command';
import { Params } from '@angular/router';
import { Icon } from '@angular-starter-pack/icon';

export class MenuItem {
  public constructor(
    public readonly label: string,
    public readonly type: MenuItemType,
    public readonly visibility$: Observable<boolean>,
    public readonly routerLinkActiveOptions: RouterLinkActiveOptions,
    public readonly icon?: Nillable<Icon>,
    public readonly routerLink?: Nillable<RouterLink>,
    public readonly link?: Nillable<string>,
    public readonly children?: Nillable<MenuItem[]>,
    public readonly command?: Nillable<MenuItemCommand>,
    public readonly queryParams?: Nillable<Params>,
  ) {}

  public isLink(): boolean {
    return this.type === MenuItemType.Link;
  }

  public isCommand(): boolean {
    return this.type === MenuItemType.Command;
  }

  public isMore(): boolean {
    return this.type === MenuItemType.More;
  }

  public isRouterLink(): boolean {
    return this.type === MenuItemType.RouterLink;
  }

  public hasIcon(): boolean {
    return !isNil(this.icon);
  }
}
