export interface IJob {
  company: string;
  description: string;
  date: string;
  detail: string;
  companyCode: string;
}

export interface IPosition {
  company: string;
  description: string;
  date: string;
  detail: string;
  companyCode: string;
}


export type PositionsMap = Record<string, IPosition[]>;


