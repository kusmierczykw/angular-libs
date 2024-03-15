import { RouteQueryParam } from '../../../index';

export type RouterLinkQueryParams = {
  [key in RouteQueryParam]?: string | number | boolean;
};
