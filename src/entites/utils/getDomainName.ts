export function getDomainName(url: string): string {
  return url.replace(/^(https?:\/\/)?(www\.)?/, '');
}
