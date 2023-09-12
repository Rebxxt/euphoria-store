import {Component, Input, OnInit, TemplateRef} from '@angular/core';

export type InputType = 'email' | 'password' | 'text'

@Component({
  selector: 'app-auth-input',
  templateUrl: './auth-input.component.html',
  styleUrls: ['./auth-input.component.scss'],
})
export class AuthInputComponent implements OnInit {

  @Input()
  public label: string = ''

  @Input()
  public placeholder: string = ''

  @Input()
  public footerTemplate?: TemplateRef<HTMLElement>

  @Input()
  public footerAlign: 'end' | 'center' | 'start' = 'start'

  @Input()
  public set type(type: InputType) {
    this._type = type
    this.nativeType = type;
  }

  public get type() {
    return this._type;
  }

  public nativeType: InputType = 'text'

  private _type: InputType = 'text'

  constructor() { }

  ngOnInit(): void {
  }

  public hidePassword() {
    if (this.type === 'password') {
      this.nativeType = this.nativeType === 'password' ? 'text' : 'password';
    }
  }
}
