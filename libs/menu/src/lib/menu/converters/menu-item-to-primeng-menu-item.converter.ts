import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { isNil, Nillable, valueOrUndefined } from '@angular-starter-pack/nil';
import { PrimengMenuItem } from '../models/primeng-menu-item';
import { IconCssProviderService } from '@angular-starter-pack/icon';
import { Icon } from '@angular-starter-pack/icon';

@Injectable({
  providedIn: 'root',
})
export class MenuItemToPrimengMenuItemConverter {
  public constructor(private readonly iconProvider: IconCssProviderService) {}

  public convert(item: MenuItem): PrimengMenuItem {
    const { label, routerLink, link, children, icon } = item;

    return {
      label: valueOrUndefined(label),
      routerLink: valueOrUndefined(routerLink),
      url: valueOrUndefined(link),
      icon: valueOrUndefined(this.convertToCssIcon(icon)),
      items: valueOrUndefined(this.convertToChildren(children)),
    };
  }

  private convertToChildren(
    children: Nillable<MenuItem[]>,
  ): Nillable<PrimengMenuItem[]> {
    if (isNil(children)) {
      return null;
    }

    return children.map((child) => this.convert(child));
  }

  private convertToCssIcon(icon: Nillable<Icon>): Nillable<string> {
    if (isNil(icon)) {
      return null;
    }

    return this.iconProvider.getCss(icon);
  }
}
