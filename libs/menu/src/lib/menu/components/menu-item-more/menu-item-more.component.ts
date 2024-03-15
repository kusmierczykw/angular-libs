import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from '../../builders/menu-item.builder';
import { MenuItemContentTemplateRef } from '../../types/menu-item-content-template-ref';
import { Nillable } from '@angular-starter-pack/nil';

@Component({
  selector: 'lib-menu-item-more',
  standalone: true,
  imports: [CommonModule, forwardRef(() => MenuItemComponent)],
  templateUrl: './menu-item-more.component.html',
  styleUrls: ['./menu-item-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: 'auto',
          opacity: 1,
          overflow: 'hidden',
        }),
      ),
      state(
        'close',
        style({
          height: 0,
          opacity: 0,
          overflow: 'hidden',
        }),
      ),
      transition('open => close', [animate('100ms')]),
      transition('close => open', [animate('100ms')]),
    ]),
  ],
})
export class MenuItemMoreComponent implements OnInit {
  @Input({ required: true }) public item!: MenuItem;
  @Input() public contentTemplateRef: Nillable<MenuItemContentTemplateRef>;

  @Output() public readonly toggleExpansionEvent = new EventEmitter<boolean>();

  public expanded = false;

  public constructor(private readonly router: Router) {}

  public ngOnInit(): void {
    this.expanded = this.isActiveRouterLink(this.item);
    this.notifyExpandedEvent();
  }

  public handleMoreClick(): void {
    this.expanded = !this.expanded;
    this.notifyExpandedEvent();
  }

  public isActive(): boolean {
    return this.isActiveRouterLink(this.item);
  }

  private isActiveRouterLink(item: MenuItem): boolean {
    if (item.isMore()) {
      return item.children!.some((child) => this.isActiveRouterLink(child));
    }

    if (item.isRouterLink()) {
      return this.router.isActive(this.router.createUrlTree(item.routerLink!), {
        paths: 'exact',
        queryParams: 'exact',
        fragment: 'ignored',
        matrixParams: 'ignored',
      });
    }

    return false;
  }

  private notifyExpandedEvent(): void {
    this.toggleExpansionEvent.emit(this.expanded);
  }
}
