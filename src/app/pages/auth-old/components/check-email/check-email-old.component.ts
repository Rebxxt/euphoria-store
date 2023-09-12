import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email-old.component.html',
  styleUrls: ['./check-email-old.component.scss']
})
export class CheckEmailOldComponent implements OnInit {


  public hasError: boolean = true;

  public errorMessage: string = 'Wrong address';

  public passwordType: 'password' | 'text' = 'password';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(event: any) {
    console.log('sign in')
    // event.preventDefault()
  }

  hidePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  resend() {
    console.log('resend email')
    this.router.navigate(['auth', 'create-password'])
  }
}
