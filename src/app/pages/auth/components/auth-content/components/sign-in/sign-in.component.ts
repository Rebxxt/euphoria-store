import {Component, HostBinding, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [
    trigger('testerOpen', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(300),
      ]),
      transition(':leave', [
        animate(300),
        style({
          opacity: 0,
        }),
      ]),
    ])
  ]
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
