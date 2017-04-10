import { Project } from './project.model';
import { User } from './user.model';
import { Need } from './need.model';
import { SocialMedia } from './social-media.model';
import { Contact } from './contact.model';

export class User {
  constructor(
    public name: string,
    public location: string,
    public userEmail: string,
    public userImage: string,
    public projectList: Project []
  ){}

}
