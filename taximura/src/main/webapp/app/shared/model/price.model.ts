export interface IPrice {
  id?: number;
  amount?: number;
  fromPlace?: string;
  toPlace?: string;
  fromLat?: string;
  fromLong?: string;
  toLat?: string;
}

export class Price implements IPrice {
  constructor(
    public id?: number,
    public amount?: number,
    public fromPlace?: string,
    public toPlace?: string,
    public fromLat?: string,
    public fromLong?: string,
    public toLat?: string
  ) {}
}
