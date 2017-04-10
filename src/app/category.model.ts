import { Project } from './project.model';

export class Need{
  constructor(
    public title: string,
    public description: string,
    public projects: Project[]
  ){};
}
