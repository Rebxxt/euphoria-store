import { Component, OnInit } from '@angular/core';
import {Event, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {AuthPage} from "../../../../types/auth";

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent implements OnInit {

  public selectedRoute: 'sign-in' | 'sign-up' | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setRoute(this.router.url)
    this.router.events.pipe(filter(v => v instanceof NavigationEnd)).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setRoute(event.url)
      }
    })
  }

  private setRoute(route: string) {
    if (route.includes(AuthPage.SIGN_IN)) {
      this.selectedRoute = 'sign-in'
    } else if (route.includes(AuthPage.SIGN_UP)) {
      this.selectedRoute = 'sign-up'
    } else {
      this.selectedRoute = null;
    }
  }
}
