import { Project } from './project.model';

export class User {
  constructor(
    public name: string,
    public location: string,
    public userEmail: string,
    public userImage: string,
    public projectList: Project []
  ){}

}
