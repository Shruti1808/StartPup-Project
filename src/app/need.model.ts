import { User } from './user.model';

export class Need{
  public id: string;
  
  constructor(
    public title: string,
    public type: string,
    public description: string
    // public candidates: User[]
  ){};
}
