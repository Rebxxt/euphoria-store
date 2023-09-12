import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass-old.component.html',
  styleUrls: ['./reset-pass-old.component.scss']
})
export class ResetPassOldComponent implements OnInit {


  public hasError: boolean = true;

  public errorMessage: string = 'Wrong address';

  public passwordType: 'password' | 'text' = 'password';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword(event: any) {
    console.log('sign in')
    this.router.navigate(['auth', 'check-email'])
    // event.preventDefault()
  }

  hidePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
