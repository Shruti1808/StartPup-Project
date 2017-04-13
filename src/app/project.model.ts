import { User } from './user.model';
import { Need } from './need.model';
import { SocialMedia } from './social-media.model';
import { Contact } from './contact.model';

export class Project {

  constructor(
    public owner: string,
    public needs: Need[],
    public title: string,
    public image: string,
    public description: string,
    public socialMedia: SocialMedia[],
    public contactInformation: Contact[],
    public website: string){}
}
