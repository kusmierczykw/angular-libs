import { Injectable } from '@angular/core';
import { AssetImage } from '@core/assets/enums/asset-image';
import { isNil } from '@core/utils/nil/is-nil';
import { EntryNotFoundException } from '@core/exceptions/entry-not-found.exception';

@Injectable({
  providedIn: 'root',
})
export class AssetImageUrlProviderService {
  /* prettier-ignore */
  private entry = new Map<AssetImage, string>([
    [AssetImage.DefaultImage, 'default-image.svg'],
    [AssetImage.LogoHorizontalMono, 'uniwersytet_slaski_logo_poziom_biale.png'],
    [AssetImage.LogoVerticalColor, 'uniwersytet_slaski_logo_pion_kolor.svg'],
    [AssetImage.LogoEuropeanSocialFund, 'ue_europejski_fundusz_spoleczny_logo.svg'],
    [AssetImage.LogoEuropeanFunds, 'ue_fundusze_europejskie_logo.svg'],
  ]);

  url(image: AssetImage): string {
    const url = this.entry.get(image);

    if (isNil(url)) {
      const key = AssetImage[image];

      throw new EntryNotFoundException(
        `The image entry for "${key}" not found.`,
      );
    }

    return `assets/images/${url}`;
  }
}
