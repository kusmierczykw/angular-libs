import { TemplateRef } from '@angular/core';
import { MenuItem } from '../models/menu-item';

export type MenuItemContentTemplateRef = TemplateRef<{
  item: MenuItem;
  expanded: boolean;
}>;
