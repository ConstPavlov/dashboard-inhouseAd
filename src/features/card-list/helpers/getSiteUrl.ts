import { ISite } from '../../../shared';

export function getSiteUrl(siteId: number, sites: ISite[]) {
  const site = sites.find((item: ISite) => item.id === siteId);
  return site?.url ? site?.url : '';
}
