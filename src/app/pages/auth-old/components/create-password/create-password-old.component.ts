import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password-old.component.html',
  styleUrls: ['./create-password-old.component.scss']
})
export class CreatePasswordOldComponent implements OnInit {

  public passwordType: 'password' | 'text' = 'password';

  public hasError: boolean = true;

  public errorMessage: string = 'Wrong address';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(event: any) {
    console.log('sign in')
  }

  forgetPassword() {
    console.log("forget")
  }

  hidePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

}
