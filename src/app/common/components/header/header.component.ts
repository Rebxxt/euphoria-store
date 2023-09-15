import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Data, Router, RoutesRecognized} from "@angular/router";
import {filter} from "rxjs";
import {Header, headerByType} from "./header";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('content', { read: ViewContainerRef})
  public content!: ViewContainerRef

  public routeData?: Data = {};

  public currentHeader?: any

  constructor(private router: Router, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.initRouteData();
  }

  private initRouteData() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild?.data;
        const header: Header = this.routeData?.['header'];
        if (header && header in headerByType) {
          this.currentHeader = headerByType[header]
          this.content.clear()
          this.content.createComponent(this.currentHeader);
        }
      }
    });
  }

  private chooseHeader() {

  }

}
