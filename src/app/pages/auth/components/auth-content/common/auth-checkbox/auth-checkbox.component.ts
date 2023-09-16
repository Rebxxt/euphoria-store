import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-checkbox',
  templateUrl: './auth-checkbox.component.html',
  styleUrls: ['./auth-checkbox.component.scss']
})
export class AuthCheckboxComponent implements OnInit {

  @Input()
  public label: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
