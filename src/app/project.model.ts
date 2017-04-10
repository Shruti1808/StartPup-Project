import ( Need ) from './need.model';
import ( User ) from './user.model';

export class Project {
  public owner: User;
  public needs: Need[];

  constructor(
    public title: string,
    public image: string,
    public description: string,
    public socialMedia: string[],
    public contactInformation: string[],
    public website: string
  );
}
