import { Component, OnInit } from '@angular/core';
import { AuthPage } from '../../../../common/types/auth';
import { Event, NavigationEnd, Router } from '@angular/router';
import { debounce, filter, Subject, timer } from 'rxjs';
import { values } from 'lodash';
import { animate, style, transition, trigger } from '@angular/animations';

type AuthPicPage = Partial<Record<AuthPage, string>>
type AuthPicStylePage = Partial<Record<AuthPage, Record<string, string>>>

@Component({
  selector: 'app-auth-pic',
  templateUrl: './auth-pic.component.html',
  styleUrls: ['./auth-pic.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('500ms', style({ opacity: 0 }))
        ])
      ]
    )
  ]
})
export class AuthPicComponent implements OnInit {

  public get currentPage() {
    return this._currentPage;
  }

  public set currentPage(url) {
    const endUrl: AuthPage = this.getUrlEndless(url as string) as AuthPage
    if (values(AuthPage).includes(endUrl)) {
      this._currentPage = endUrl;
    } else {
      this._currentPage = undefined;
    }
  }

  public _currentPage?: AuthPage;

  public pics: AuthPicPage = {
    [ AuthPage.SIGN_IN ]: 'shop1.jpeg',
    [ AuthPage.SIGN_UP ]: 'shop2.jpeg',
    [ AuthPage.RESET_PASSWORD ]: 'shop3.jpeg',
    [ AuthPage.CHECK_EMAIL ]: 'shop4.jpeg',
    [ AuthPage.VERIFICATION ]: 'shop5.jpeg',
    [ AuthPage.CREATE_PASSWORD ]: 'shop6.jpeg',
  }

  public picStyles: AuthPicStylePage = {
    [ AuthPage.SIGN_IN ]: {
      'background-image': 'url("/assets/pics/shop1.jpeg")',
      'background-position': '40% 25%',
      'background-size': 'auto 115%',
      'background-repeat': 'no-repeat',
    },
    [ AuthPage.SIGN_UP ]: {
      'background-image': 'url("/assets/pics/shop2.jpeg")',
      'background-position': '50% 0',
      'background-size': '130% auto',
      'background-repeat': 'no-repeat',
    },
    [ AuthPage.RESET_PASSWORD ]: {
      'background-image': 'url("/assets/pics/shop3.jpeg")',
      'background-position': '50% 0',
      'background-size': 'auto 115%',
      'background-repeat': 'no-repeat',
    },
    [ AuthPage.CHECK_EMAIL ]: {
      'background-image': 'url("/assets/pics/shop4.jpeg")',
      'background-position': '30% 0',
      'background-size': 'auto 115%',
      'background-repeat': 'no-repeat',
    },
    [ AuthPage.VERIFICATION ]: {
      'background-image': 'url("/assets/pics/shop5.jpeg")',
      'background-position': '50% 25%',
      'background-size': 'auto 115%',
      'background-repeat': 'no-repeat',
    },
    [ AuthPage.CREATE_PASSWORD ]: {
      'background-image': 'url("/assets/pics/shop6.jpeg")',
      'background-position': '50% 10%',
      'background-size': '130% auto',
      'background-repeat': 'no-repeat',
    },
  }

  public openClose: boolean = true;

  public get pageStyles() {
    if (this.currentPage) {
      return this.picStyles[ this.currentPage ]
    }
    return {}
  }

  private debouncer$ = new Subject<string>()

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.initAnimation()
    this.initRoute();
  }

  next() {
    console.log('next')
  }

  private initRoute() {
    this.currentPage = this.router.url as (AuthPage | undefined);
    this.router.events.pipe(filter(v => v instanceof NavigationEnd)).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log('NAVIGATION EVENT')
        this.openClose = false;
        this.debouncer$.next(event.url);
      }
    })
  }

  private initAnimation() {
    this.debouncer$.pipe(debounce(() => timer(500))).subscribe((url) => {
      this.openClose = true;
      console.log('url', url)
      this.setCurrentPage(url);
    })
  }

  private setCurrentPage(url: string) {
    const endUrl: AuthPage = this.getUrlEndless(url) as AuthPage
    if (values(AuthPage).includes(endUrl)) {
      this.currentPage = endUrl
    }
  }

  private getUrlEndless(url: string) {
    return url.split('/').slice(-1)[ 0 ]
  }
}
