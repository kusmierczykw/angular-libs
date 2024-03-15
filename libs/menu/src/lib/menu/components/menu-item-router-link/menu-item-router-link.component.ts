import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../builders/menu-item.builder';
import { valueOrNull } from '@angular-starter-pack/nil';

@Component({
  selector: 'lib-menu-item-router-link',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './menu-item-router-link.component.html',
  styleUrls: ['./menu-item-router-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemRouterLinkComponent {
  @Input({ required: true }) item!: MenuItem;

  readonly valueOrNull = valueOrNull;
}
