import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Data, Router, RoutesRecognized } from '@angular/router';
import { Header, headerByType } from './header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('content', { read: ViewContainerRef })
  public content!: ViewContainerRef

  public routeData?: Data = {};

  public currentHeader?: Type<Component>

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initRouteData();
  }

  private initRouteData() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild?.data;
        const header: Header = this.routeData?.[ 'header' ];
        if (header && header in headerByType) {
          this.currentHeader = headerByType[ header ]
          this.content.clear()
          this.content.createComponent(headerByType[ header ]);
        }
      }
    });
  }

}
