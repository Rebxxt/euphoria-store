import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verification',
  templateUrl: './verification-old.component.html',
  styleUrls: ['./verification-old.component.scss']
})
export class VerificationOldComponent implements OnInit {
  public passwordType: 'password' | 'text' = 'password';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  verify(event: any) {
    console.log('sign in')
    // event.preventDefault()
  }

  hidePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
