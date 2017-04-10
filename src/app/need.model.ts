import { User } from './user.model';

export class Need{
  constructor(
    public title: string,
    public description: string,
    public candidates: User[]
  ){};
}
