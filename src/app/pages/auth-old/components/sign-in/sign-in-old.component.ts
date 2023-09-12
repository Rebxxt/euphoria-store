import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-old.component.html',
  styleUrls: ['./sign-in-old.component.scss']
})
export class SignInOldComponent implements OnInit {
  public passwordType: 'password' | 'text' = 'password';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  signIn(event: any) {
    console.log('sign in')
    // event.preventDefault()
  }

  hidePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
