import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@angular-libs/icon';

@Component({
  selector: 'demo-icon-example',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './icon-example.component.html',
  styleUrl: './icon-example.component.scss',
})
export class IconExampleComponent {}
