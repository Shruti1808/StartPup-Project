import ( Need ) from './need.model';
import ( User ) from './user.model';

export class Project {
  constructor(
    public title: string,
    public image: string,
    public description: string,
    public needs: Need[],
    public socialMedia: string[],
    public contactInformation: string[],
    public owner: User
  );
}
