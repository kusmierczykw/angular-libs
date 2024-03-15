import { Pipe, PipeTransform } from '@angular/core';
import { AssetImageUrlProviderService } from '../providers/asset-image-url-provider.service';
import { AssetImage } from '../enums/asset-image';

@Pipe({
  name: 'assetImageUrl',
  standalone: true,
})
export class AssetImageUrlPipe implements PipeTransform {
  public constructor(private readonly provider: AssetImageUrlProviderService) {}

  public transform(image: AssetImage): string {
    return this.provider.url(image);
  }
}
