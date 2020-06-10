import { IDrive } from 'app/shared/model/drive.model';

export interface IUserRel {
  id?: number;
  user?: number;
  drives?: IDrive[];
  allDrives?: IDrive[];
}

export class UserRel implements IUserRel {
  constructor(public id?: number, public user?: number, public drives?: IDrive[], public allDrives?: IDrive[]) {}
}
