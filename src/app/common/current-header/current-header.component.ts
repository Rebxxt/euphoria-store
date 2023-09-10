import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {AuthHeaderComponent} from "./components/auth-header/auth-header.component";
import {StandardHeaderComponent} from "./components/standart-header/standard-header.component";
import {ActivatedRoute, NavigationEnd, Router, Event} from "@angular/router";
import {filter} from "rxjs";

export interface Header {
  auth: any
  standard: any
}

@Component({
  selector: 'app-current-header',
  templateUrl: './current-header.component.html',
  styleUrls: ['./current-header.component.scss']
})
export class CurrentHeaderComponent implements OnInit {

  private headers: Header = {
    auth: AuthHeaderComponent,
    standard: StandardHeaderComponent,
  }

  @ViewChild('con', { read: ViewContainerRef }) container!: ViewContainerRef
  @ViewChild('tem', { read: TemplateRef }) template!: TemplateRef<any>

  public currentHeader?: TemplateRef<any>

  public selectedRoute: 'sign-in' | 'sign-up' | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private vc: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    console.log('init')
    this.router.events.pipe(filter(v => v instanceof NavigationEnd)).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log('event', event)
        if (event.url.includes('sign-in')) {
          this.selectedRoute = 'sign-in'
        } else if (event.url.includes('sign-up')) {
          this.selectedRoute = 'sign-up'
        } else {
          this.selectedRoute = null;
        }
      }
    })
  }

  onChangeHeader(name: keyof Header) {
    this.vc.clear()
    this.vc.createComponent(this.headers[name])
  }

}
