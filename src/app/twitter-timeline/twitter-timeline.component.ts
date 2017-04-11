import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.scss']
})
export class TwitterTimelineComponent implements OnInit {
  @Input() twitterHandle: string;

  constructor() { }

  ngOnInit(){
    let twttr = (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0],
      t = twttr || {};
      if (d.getElementById(id)) {return t};
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
    }(document, 'script', 'twitter-wjs'));

    setTimeout(function () { twttr.widgets.load(); }, 500);
    // twttr.widgets.createTimeline(
    //   {
    //     sourceType: 'profile',
    //     screenName: 'this.twitterHandle'
    //   },
    //   document.getElementById("twitter-timeline")
    // );
  }

  getTwitterUrl(twitterHandle:string) {
    return 'https://twitter.com/' + twitterHandle;
  }


}
