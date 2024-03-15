import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icon, IconComponent } from '@angular-starter-pack/icon';

@Component({
  selector: 'demo-icon-example',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './icon-example.component.html',
  styleUrl: './icon-example.component.scss',
})
export class IconExampleComponent {
  protected readonly Icon = Icon;
}
