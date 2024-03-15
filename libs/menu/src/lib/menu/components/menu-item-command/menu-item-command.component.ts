import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../builders/menu-item.builder';

@Component({
  selector: 'lib-menu-item-command',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item-command.component.html',
  styleUrls: ['./menu-item-command.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemCommandComponent {
  @Input({ required: true }) public item!: MenuItem;

  public handleCommandClick(): void {
    this.item.command!();
  }
}
