import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@angular-starter-pack/icon';
import { MenuItem } from '../../builders/menu-item.builder';

@Component({
  selector: 'lib-menu-item-content-default',
  standalone: true,
  imports: [CommonModule, IconComponent, IconComponent],
  templateUrl: './menu-item-content-default.component.html',
  styleUrls: ['./menu-item-content-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemContentDefaultComponent {
  @Input({ required: true }) public item!: MenuItem;
}
