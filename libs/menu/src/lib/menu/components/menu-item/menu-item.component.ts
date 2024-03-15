import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemContentDefaultComponent } from '../menu-item-content-default/menu-item-content-default.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItemRouterLinkComponent } from '../menu-item-router-link/menu-item-router-link.component';
import { MenuItemLinkComponent } from '../menu-item-link/menu-item-link.component';
import { MenuItemCommandComponent } from '../menu-item-command/menu-item-command.component';
import { MenuItemMoreComponent } from '../menu-item-more/menu-item-more.component';
import { MenuItem } from '../../builders/menu-item.builder';
import { MenuItemContentTemplateRef } from '../../types/menu-item-content-template-ref';
import { Nillable } from '@angular-starter-pack/nil';

@Component({
  selector: 'lib-menu-item',
  standalone: true,
  imports: [
    CommonModule,
    MenuItemContentDefaultComponent,
    RouterLinkActive,
    RouterLink,
    MenuItemRouterLinkComponent,
    MenuItemLinkComponent,
    MenuItemCommandComponent,
    MenuItemMoreComponent,
  ],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  @Input({ required: true }) public item!: MenuItem;
  @Input() public contentTemplateRef: Nillable<MenuItemContentTemplateRef>;
  @Input()
  public nestedContentTemplateRef: Nillable<MenuItemContentTemplateRef>;

  @HostBinding('class.expanded')
  public expanded = false;

  public handleToggleExpansionEvent(expanded: boolean): void {
    this.expanded = expanded;
  }
}
