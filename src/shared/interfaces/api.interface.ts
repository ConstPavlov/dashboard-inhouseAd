export enum TypeProject {
  CLASSIC = 'CLASSIC',
  SERVER_SIDE = 'SERVER_SIDE',
  MVT = 'MVT',
}

export enum StatusProject {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

export interface ISite {
  id: number;
  url: string;
}

export interface ITest {
  id: number;
  name: string;
  type: TypeProject;
  status: StatusProject;
  siteId: number;
}
