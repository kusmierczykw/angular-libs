import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Icon } from './types/icon';
import { IconCssPipe } from './pipes/icon-css.pipe';

@Component({
  selector: 'lib-icon',
  standalone: true,
  imports: [IconCssPipe],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true }) public icon!: Icon;
}
