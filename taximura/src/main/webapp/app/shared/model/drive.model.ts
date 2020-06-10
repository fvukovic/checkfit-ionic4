import { IUserRel } from 'app/shared/model/user-rel.model';

export interface IDrive {
  id?: number;
  fromLat?: string;
  fromLong?: string;
  toLat?: string;
  price?: number;
  userRel?: IUserRel;
  user?: IUserRel;
}

export class Drive implements IDrive {
  constructor(
    public id?: number,
    public fromLat?: string,
    public fromLong?: string,
    public toLat?: string,
    public price?: number,
    public userRel?: IUserRel,
    public user?: IUserRel
  ) {}
}
