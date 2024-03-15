import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { MenuItemBuilder } from '../builders/menu-item.builder';
import { MenuItem } from '../models/menu-item';
import { isNil, Nillable } from '@angular-starter-pack/nil';

@Pipe({
  name: 'onlyVisibleMenuItems',
  standalone: true,
})
export class OnlyVisibleMenuItemsPipe implements PipeTransform {
  public constructor(private readonly builder: MenuItemBuilder) {}

  public transform(items: MenuItem[]): Observable<MenuItem[]> {
    return this.onlyVisibleItems(items);
  }

  private onlyVisibleItems(items: MenuItem[]): Observable<MenuItem[]> {
    return combineLatest(
      items.map((item) =>
        item.visibility$.pipe(
          switchMap((visible) => {
            if (!visible) {
              return of(null);
            }

            const { children } = item;

            if (isNil(children)) {
              return of(item);
            }

            const children$ = this.onlyVisibleItems(children);

            return children$.pipe(
              map((children) =>
                this.builder
                  .from(item)
                  .children(() => children)
                  .build(),
              ),
            );
          }),
        ),
      ),
    ).pipe(
      map((items: Nillable<MenuItem>[]) =>
        items.filter(
          (item: Nillable<MenuItem>): item is MenuItem => !isNil(item),
        ),
      ),
    );
  }
}
