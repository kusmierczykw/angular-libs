import { Injectable } from '@angular/core';
import { Icon } from '../types/icon';
import { IconEntryNotFoundException } from '../exceptions/icon-entry-not-found.exception';

@Injectable({
  providedIn: 'root',
})
export class IconCssProviderService {
  private readonly entries = new Map<Icon, string>([
    ['bi-x-lg', 'bi bi-x-lg'],
    ['bi-text-paragraph', 'bi bi-text-paragraph'],
  ]);

  public getCss(icon: Icon): string {
    const result = this.entries.get(icon);

    if (result) {
      return result;
    }

    throw new IconEntryNotFoundException(`Not found entry for "${icon}" name.`);
  }
}
