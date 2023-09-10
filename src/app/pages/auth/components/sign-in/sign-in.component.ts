import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public passwordType: 'password' | 'text' = 'password';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('OUTLET', this.route.snapshot)
  }

  signIn(event: any) {
    console.log('sign in')
    // event.preventDefault()
  }

  hidePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
