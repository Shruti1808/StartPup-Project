import { Project } from './project.model';
import { Need } from './need.model';
import { SocialMedia } from './social-media.model';
import { Contact } from './contact.model';

export class User {
  public location: string;
  public userImage: string;
  public projectList: string[];

  constructor(
    public name: string,
    public userEmail: string,
    public userPassword: string
  ){}

}
