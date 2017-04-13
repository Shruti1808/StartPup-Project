import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ ProjectService ]
})
export class ProjectListComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToProjectDetail(clickedProject) {
    this.router.navigate(["projects", clickedProject.$key]);
  }

  truncateDescription(str: string) {
    var limit = 150;
    var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
    var reg = new RegExp('(?=[' + trimmable + '])');
    var words = str.split(reg);
    var count = 0;
    return words.filter(function(word) {
      count += word.length;
      return count <= limit;
    }).join('') + this.countDescription(count, limit);
  }

  countDescription(count, limit) {
    if (count > limit) {
      return '...';
    } else {
      return '';
    }
  }

}
