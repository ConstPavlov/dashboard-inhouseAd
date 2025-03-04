import { ITest } from '../../../../shared';

export function formatData(data: ITest[]): any {
  return data.map((elem: ITest) => ({
    ...elem,
    type: elem.type
      .toLowerCase()
      .replace(/_/g, '-')
      .replace(/^\w/, c => c.toUpperCase()),
    status: elem.status
      .toLowerCase()
      .replace(/_/g, '-')
      .replace(/^\w/, c => c.toUpperCase()),
  }));
}
