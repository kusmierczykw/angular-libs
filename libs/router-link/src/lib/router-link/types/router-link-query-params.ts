import { RouteQueryParam } from '../enums/route-query-param';

export type RouterLinkQueryParams = {
  [key in RouteQueryParam]?: string | number | boolean;
};
