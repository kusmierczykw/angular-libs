import { Injectable } from '@angular/core';
import { Icon } from '../enums/icon';
import { IconEntryNotFoundException } from '../exceptions/icon-entry-not-found.exception';

@Injectable({
  providedIn: 'root',
})
export class IconCssProviderService {
  private readonly entries = new Map<Icon, string>([
    [Icon.X_LG, 'bi bi-x-lg'],
    [Icon.TextParagraph, 'bi bi-text-paragraph'],
  ]);

  public getCss(icon: Icon): string {
    const result = this.entries.get(icon);

    if (result) {
      return result;
    }

    const name = Icon[icon];

    throw new IconEntryNotFoundException(`Not found entry for "${name}" name.`);
  }
}
