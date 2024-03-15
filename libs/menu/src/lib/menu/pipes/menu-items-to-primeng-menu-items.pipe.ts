import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { MenuItemToPrimengMenuItemConverter } from '../converters/menu-item-to-primeng-menu-item.converter';
import { PrimengMenuItem } from '../models/primeng-menu-item';

@Pipe({
  name: 'menuItemsToPrimengMenuItems',
  standalone: true,
})
export class MenuItemsToPrimengMenuItemsPipe implements PipeTransform {
  public constructor(
    private readonly converter: MenuItemToPrimengMenuItemConverter,
  ) {}

  public transform(items: MenuItem[]): PrimengMenuItem[] {
    return items.map((item) => this.converter.convert(item));
  }
}
