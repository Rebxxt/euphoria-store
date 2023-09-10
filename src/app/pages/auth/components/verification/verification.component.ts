import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  public passwordType: 'password' | 'text' = 'password';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('OUTLET', this.route.snapshot)
  }

  verify(event: any) {
    console.log('sign in')
    // event.preventDefault()
  }

  hidePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
