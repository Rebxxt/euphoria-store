import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public passwordType: 'password' | 'text' = 'password';

  public hasError: boolean = true;

  public errorMessage: string = 'Wrong address';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('OUTLET', this.route.snapshot)
  }

  signUp(event: any) {
    console.log('sign in')
    this.router.navigate(['auth', 'verification'])

    // event.preventDefault()
  }

  forgetPassword() {
    console.log("forget")
  }

  hidePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
