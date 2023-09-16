import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { AuthPage } from '../../../../common/types/auth';
import { values } from 'lodash';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ top: '100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ top: '-100%', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('500ms ease-out', style({ top: '0%' }))
          ], { optional: true }),
          query('@*', animateChild(), { optional: true })
        ]),
      ])
    ])
  ]
})
export class AuthContentComponent implements OnInit {
  prepareRoute() {
    return this.childrenOutletContext.getContext('primary')?.route?.snapshot?.data[ 'animation' ];
  }
  public counter = 0;

  public changePage = true

  constructor(private router: Router, private childrenOutletContext: ChildrenOutletContexts) { }

  ngOnInit(): void {
  }

  next() {
    const authValues = values(AuthPage)
    this.router.navigate(['auth', authValues[ this.counter++ % authValues.length ]])
  }
}
